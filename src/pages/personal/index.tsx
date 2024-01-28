import React, { useEffect } from "react";
import {
  Flex,
  Stack,
  Image,
  useToast,
  useClipboard,
  Progress,
  Input,
} from "@chakra-ui/react";
import type { GetStaticProps } from "next";

import Text from "@/components/Text";
import LPInfoItem from "@/components/LPInfoItem";

import BaseButton from "@/components/BaseButton";
import { useConfigContext } from "@/context/ConfigContext";
import { useContractsContext } from "@/context/ContractsContext";
import px2vw from "@/theme/utils/px2vw";
import { formatAddress, formatValue, toWei } from "@/utils/common";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import useTransaction from "@/hooks/useTransaction";

import ASTRToken from "@/assets/images/ASTRToken.png";
import panelBG1 from "@/assets/images/panelBG1.png";
import panelBG3 from "@/assets/images/panelBG3.png";
import panelBG4 from "@/assets/images/panelBG4.png";
import gradientLink from "@/assets/images/gradientLink.svg";
import { blueButtonStyle } from "@/pages/myNFT";
import { useRouter } from "next/router";
import useErc20 from "@/hooks/useErc20";
import { toastSuccessConfig } from "@/components/NewHome";
import { TRANSFER_AMOUNT } from "@/components/Modals/InviteModalContent";
import useUserStore from "@/stores/user";
import { UserTypeEnum } from "@/apis/v2";
import BigNumber from "bignumber.js";

type Props = {
  // Add custom props here
};

export const SignUserButton = () => {
  const { address } = useConfigContext();
  const { isLoading, handleSignUserInfo } = useUserStore();
  return (
    <Stack
      spacing={px2vw(20)}
      marginTop={px2vw(100)}
      marginBottom={px2vw(100)}
      justifyContent="center"
      alignItems="center"
    >
      <Text>为了保证您的数据安全，请先进行签名</Text>
      <BaseButton
        isLoading={isLoading}
        width={px2vw(246)}
        fontSize="18px"
        onClick={() => {
          if (!address) return;
          handleSignUserInfo?.(address);
        }}
        colorScheme="gold"
        color="black.100"
      >
        签名
      </BaseButton>
    </Stack>
  );
};

function Index() {
  const router = useRouter();
  const toast = useToast();

  const { onCopy, setValue } = useClipboard("");

  const { config, address } = useConfigContext();
  const { awardCenterContract } = useContractsContext();
  const { data, handleSignUserInfo } = useUserStore();
  const { t } = useTranslation(["lp"]);

  const getBalanceStatus = useQuery(
    ["getBalance", address, awardCenterContract?.address],
    async () => {
      const res = await getRewardBalance();
      return res?.toString();
    },
    {
      enabled: !!address && !!awardCenterContract?.address,
    }
  );

  const lscStatus = useErc20({
    tokenAddress: config?.astr as string,
    approveTokenAddress: config?.nftMarket as string,
  });

  const lsStatus = useErc20({
    tokenAddress: config?.ls as string,
    approveTokenAddress: config?.nftMarket as string,
  });

  const claimStatus = useTransaction(awardCenterContract?.withdraw, {
    wait: true,
  });

  const monthProgress = new BigNumber(data?.business?.monthGrowth)
    .dividedBy(data?.business?.monthTarget)
    .multipliedBy(100)
    .toNumber();

  const lpProgress = new BigNumber(data?.business?.lpDepositNum)
    .dividedBy(data?.business?.lpDepositTarget)
    .multipliedBy(100)
    .toNumber();

  const getRewardBalance = async () => {
    try {
      if (!address) return;
      const res = await awardCenterContract?.getBalance(address);
      return res;
    } catch (error) {}
  };

  const handleClaim = async () => {
    try {
      const payValue = toWei(TRANSFER_AMOUNT)?.toString();
      await claimStatus.run({
        value: payValue,
      });
      await getBalanceStatus.refetch();
      await lscStatus.getBalance();
      await lsStatus.getBalance();
      toast({
        ...toastSuccessConfig,
        title: "领取成功",
      });
      //   queryPoolState.refetch();
    } catch (error) {}
  };

  useEffect(() => {
    if (!address) return;
    if (data) return;

    setValue(`${window.location.origin}?inviteAddress=${address}`);
    handleSignUserInfo?.(address);
  }, [address, data]);

  if (!data) return <SignUserButton />;

  return (
    <Flex
      flexDirection="column"
      marginTop={{ base: px2vw(42), md: "80px" }}
      padding={{ base: `0 ${px2vw(20)} ${px2vw(20)}`, md: `0 0 60px` }}
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        width={{ base: px2vw(335), md: "960px" }}
        // height={px2vw(300)}
        // height={px2vw(226)}
        margin={{ base: `${px2vw(40)} 0`, md: "40px 0" }}
        justifyContent="space-between"
        alignItems={{ base: "center", md: "center" }}
        padding={{ base: px2vw(30), md: "25px 30px" }}
        // bgColor="black.500"
        boxShadow="0px 4px 40px rgba(6, 16, 43, 0.65)"
        // borderRadius="40px"
        bgImage={panelBG1}
        bgSize="100% 100%"
        bgRepeat="no-repeat"
      >
        <Stack width="100%" spacing={{ base: px2vw(10), md: "0" }}>
          <LPInfoItem
            width={{ base: "100%", md: "inherit" }}
            justifyContent={{ base: "space-between", md: "center" }}
            label="我的身份"
            value={data?.idTypeName || "--"}
          />
          <LPInfoItem
            width={{ base: "100%", md: "inherit" }}
            justifyContent={{ base: "space-between", md: "center" }}
            label="下个级别"
            labelProps={{
              fontSize: "14px",
              color: "purple.100",
            }}
            valueProps={{
              fontSize: "14px",
            }}
            value={data?.nextIdTypeName}
          />
          <LPInfoItem
            width={{ base: "100%", md: "inherit" }}
            justifyContent={{ base: "space-between", md: "center" }}
            label="推荐人"
            labelProps={{
              fontSize: "14px",
              color: "purple.100",
            }}
            valueProps={{
              fontSize: "14px",
            }}
            value={data?.root ? formatAddress(data?.root) : "--"}
          />
        </Stack>
        {data?.idType === UserTypeEnum.Big ? (
          <>
            <Stack
              width="100%"
              paddingTop={px2vw(20)}
              spacing={{ base: px2vw(10), md: "0" }}
            >
              <LPInfoItem
                width={{ base: "100%", md: "inherit" }}
                justifyContent={{ base: "space-between", md: "center" }}
                label="直推人数"
                renderValue={() => (
                  <Flex justifyContent="center" alignItems="center">
                    <Text
                      marginRight={px2vw(10)}
                      fontSize={{ base: px2vw(18), md: "24px" }}
                      fontWeight="600"
                    >
                      {data?.business?.directPeople ?? 0}
                    </Text>
                    <Flex
                      onClick={() => {
                        router.push("/personal/teamDetail");
                      }}
                    >
                      <Text
                        marginRight={px2vw(4)}
                        type="gradient"
                        fontSize={{ base: px2vw(14), md: "24px" }}
                      >
                        详情
                      </Text>
                      <Image
                        width={px2vw(20)}
                        height={px2vw(20)}
                        src={gradientLink}
                      />
                    </Flex>
                  </Flex>
                )}
              />
              <LPInfoItem
                width={{ base: "100%", md: "inherit" }}
                justifyContent={{ base: "space-between", md: "center" }}
                label="团队人数"
                value={data?.business?.allPeople ?? 0}
              />
            </Stack>
            <Stack paddingTop={px2vw(20)} width="100%" spacing={px2vw(20)}>
              <Stack width="100%">
                <Flex
                  color="purple.100"
                  justifyContent="space-between"
                  alignItems="center"
                  // px={px2vw(10)}
                >
                  <Text fontSize="18px" type="gradient">
                    总流水(USDT)
                  </Text>
                  <Text color="white.100" fontSize="14px">
                    {data?.business?.totalGrowth || 0}
                  </Text>
                </Flex>
              </Stack>
            </Stack>
          </>
        ) : (
          <></>
        )}
        {data?.idType !== UserTypeEnum.Big ? (
          <>
            <Stack
              width="100%"
              paddingTop={px2vw(20)}
              spacing={{ base: px2vw(10), md: "0" }}
            >
              <LPInfoItem
                width={{ base: "100%", md: "inherit" }}
                justifyContent={{ base: "space-between", md: "center" }}
                label="直推人数"
                renderValue={() => (
                  <Flex justifyContent="center" alignItems="center">
                    <Text
                      marginRight={px2vw(10)}
                      fontSize={{ base: px2vw(18), md: "24px" }}
                      fontWeight="600"
                    >
                      {data?.business?.directPeople ?? 0}
                    </Text>
                    <Flex
                      onClick={() => {
                        router.push("/personal/teamDetail");
                      }}
                    >
                      <Text
                        marginRight={px2vw(4)}
                        type="gradient"
                        fontSize={{ base: px2vw(14), md: "24px" }}
                      >
                        详情
                      </Text>
                      <Image
                        width={px2vw(20)}
                        height={px2vw(20)}
                        src={gradientLink}
                      />
                    </Flex>
                  </Flex>
                )}
              />
              <LPInfoItem
                width={{ base: "100%", md: "inherit" }}
                justifyContent={{ base: "space-between", md: "center" }}
                label="团队人数"
                value={data?.business?.allPeople ?? 0}
              />
            </Stack>
            <Stack paddingTop={px2vw(20)} width="100%" spacing={px2vw(20)}>
              <Stack width="100%">
                <Flex
                  color="purple.100"
                  justifyContent="space-between"
                  alignItems="flex-start"
                  // px={px2vw(10)}
                >
                  <Text whiteSpace="nowrap" fontSize="18px" type="gradient">
                    当月NFT流水
                  </Text>
                  <Stack spacing={0} alignItems="end">
                    <Text whiteSpace="nowrap" fontSize="14px" type="gradient">
                      {`达标(${data?.business?.monthTarget})`}
                    </Text>
                    <Text whiteSpace="nowrap" fontSize="14px">
                      {`已完成(${data?.business?.monthGrowth})`}
                    </Text>
                  </Stack>
                </Flex>
                <Progress
                  colorScheme="purple"
                  borderRadius="23px"
                  height="30px"
                  hasStripe
                  isAnimated
                  bgColor="black.100"
                  border="1px solid"
                  borderColor="blue.500"
                  value={monthProgress}
                />
              </Stack>

              <Stack width="100%">
                <Flex
                  color="purple.100"
                  justifyContent="space-between"
                  alignItems="flex-start"
                  // px={px2vw(10)}
                >
                  <Text fontSize="18px" type="gradient">
                    当月LP质押达成天数
                  </Text>
                  <Stack spacing={0} alignItems="end">
                    <Text whiteSpace="nowrap" fontSize="14px" type="gradient">
                      {`达标(${data?.business?.lpDepositTarget})`}
                    </Text>
                    <Text whiteSpace="nowrap" fontSize="14px">
                      {`已完成(${data?.business?.lpDepositNum})`}
                    </Text>
                  </Stack>
                </Flex>
                <Progress
                  colorScheme="purple"
                  borderRadius="23px"
                  height="30px"
                  hasStripe
                  isAnimated
                  bgColor="black.100"
                  border="1px solid"
                  borderColor="blue.500"
                  value={lpProgress}
                />
                <Flex
                  justifyContent="flex-end"
                  alignItems="center"
                  onClick={() => {
                    router.push("/personal/depositDetail");
                  }}
                >
                  <Text
                    marginRight={px2vw(4)}
                    type="gradient"
                    fontSize={{ base: px2vw(14), md: "24px" }}
                  >
                    质押详情
                  </Text>
                  <Image
                    width={px2vw(20)}
                    height={px2vw(20)}
                    src={gradientLink}
                  />
                </Flex>
              </Stack>
            </Stack>
          </>
        ) : (
          <></>
        )}
        {data?.idType !== UserTypeEnum.Big ? (
          <Text marginTop={px2vw(30)}>提示：每月1号考核</Text>
        ) : (
          <></>
        )}

        <BaseButton
          onClick={() => {
            onCopy();
            toast({
              ...toastSuccessConfig,
              title: "复制成功",
            });
          }}
          needLogin
          marginTop={px2vw(40)}
          width={{ base: px2vw(240), md: "170px" }}
          color="black.100"
          colorScheme="gold"
          fontSize="20px"
        >
          邀请我的朋友
        </BaseButton>
      </Flex>
      <Stack
        spacing={{ base: px2vw(20), md: "0" }}
        flexDirection={{ base: "column", md: "row" }}
        width={{ base: px2vw(335), md: "960px" }}
        // height={px2vw(300)}
        height={px2vw(130)}
        margin={{ base: `${px2vw(40)} 0`, md: "40px 0" }}
        justifyContent="space-between"
        alignItems={{ base: "center", md: "center" }}
        padding={{ base: px2vw(30), md: "25px 30px" }}
        // bgColor="black.500"
        boxShadow="0px 4px 40px rgba(6, 16, 43, 0.65)"
        // borderRadius="40px"
        bgImage={panelBG4}
        bgSize="100% 100%"
        bgRepeat="no-repeat"

        // border="1px solid "
      >
        <LPInfoItem
          width={{ base: "100%", md: "inherit" }}
          justifyContent={{ base: "space-between", md: "center" }}
          label="LSC数量"
          value={formatValue(lscStatus?.balance)}
        />
        <LPInfoItem
          width={{ base: "100%", md: "inherit" }}
          justifyContent={{ base: "space-between", md: "center" }}
          label="LS数量"
          value={formatValue(lsStatus?.balance)}
        />
      </Stack>

      <Flex
        width={{ base: px2vw(335), md: "960px" }}
        direction="column"
        flex="1"
        height={{ base: px2vw(365), md: "298px" }}
        padding="30px"
        //   justifyContent="center"
        alignItems="center"
        boxShadow="0px 4px 40px rgba(6, 16, 43, 0.65)"
        bgImage={panelBG3}
        bgSize="100% 100%"
      >
        <Text
          type="gradient"
          fontSize={{ base: px2vw(24), md: "15px" }}
          fontWeight="500"
        >
          {t("myRewards")}
        </Text>
        <Stack
          marginTop={{ base: px2vw(40), md: "40px" }}
          marginBottom={{ base: px2vw(15), md: "15px" }}
          direction="row"
          spacing={{ base: px2vw(10), md: "10px" }}
        >
          <Image src={ASTRToken} width="40px" />
        </Stack>
        <Text
          marginBottom={{ base: px2vw(40), md: "40px" }}
          fontSize="18px"
          fontWeight="600"
        >
          {formatValue(getBalanceStatus?.data, true)} LSC
        </Text>
        {/* <Stack width="100%">
          <Stack>
            <Text fontSize="18px" type="gradient">
              领取地址
            </Text>
            <Input
              value="0x71cCd1189E20D8f08197e9d03BbFeA133475165B"
              borderRadius="23px"
              border="1px solid rgba(172, 143, 255, 0.20)"
              height={px2vw(70)}
              bgColor="black"
              fontSize="16px"
              color="white.60"
            />
          </Stack>
          <Stack>
            <Text fontSize="18px" type="gradient">
              领取金额
            </Text>
            <Input
              value="106.033 LSC"
              borderRadius="23px"
              border="1px solid rgba(172, 143, 255, 0.20)"
              height={px2vw(50)}
              textAlign="center"
              bgColor="black"
              fontSize="20px"
              color="white.60"
            />
          </Stack>
        </Stack> */}
        <BaseButton
          onClick={handleClaim}
          isLoading={claimStatus.loading}
          needLogin
          width={{ base: px2vw(240), md: "170px" }}
          fontSize="20px"
          color="black.100"
          colorScheme="gold"
          marginTop={px2vw(30)}
        >
          领取收益
        </BaseButton>
      </Flex>
      <Flex
        marginTop={px2vw(30)}
        width="100%"
        gap={px2vw(30)}
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
      >
        <BaseButton
          onClick={() => {
            router.push("/personal/nftRecord");
          }}
          {...blueButtonStyle}
          width={px2vw(151)}
          height={px2vw(46)}
        >
          <Text fontSize="18px" type="gradient">
            NFT交易记录
          </Text>
        </BaseButton>
        <BaseButton
          onClick={() => {
            router.push("/personal/reward");
          }}
          {...blueButtonStyle}
          width={px2vw(151)}
          height={px2vw(46)}
        >
          <Text fontSize="18px" type="gradient">
            奖励发放记录
          </Text>
        </BaseButton>

        {/* <BaseButton colorScheme="black.100">奖励发放记录</BaseButton>
        <BaseButton width={px2vw(151)}>运营中心</BaseButton>
        <BaseButton height={px2vw(46)}>节点活动中心</BaseButton> */}
      </Flex>
      <BaseButton
        onClick={() => {
          router.push("/personal/operation");
        }}
        marginTop={px2vw(20)}
        colorScheme="gold"
        color="black.100"
        fontSize="18px"
        width={px2vw(240)}
        height={px2vw(46)}
      >
        奖励中心
      </BaseButton>
    </Flex>
  );
}
export default Index;

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "cn", ["lp", "common"])),
  },
});
