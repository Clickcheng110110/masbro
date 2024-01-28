import React, { useState } from "react";
import { Flex, Stack, useToast } from "@chakra-ui/react";

import BigNumber from "bignumber.js";
import BaseButton from "@/components/BaseButton";
import { IModalContentProps } from "@/hooks/useModal";
import { fromWei, sleep, toWei } from "@/utils/common";
import Text from "@/components/Text";
import Fee, { OperateEnum, ValuesEnum } from "@/components/Fee";

import { useContractsContext } from "@/context/ContractsContext";
import useTransaction from "@/hooks/useTransaction";
import { TRANSFER_AMOUNT } from "./InviteModalContent";

import { toastSuccessConfig, toastWarningConfig } from "../NewHome";
import useErc20 from "@/hooks/useErc20";
import { useConfigContext } from "@/context/ConfigContext";
import { OperationVerifyStatus } from "@/apis/v2";
import { debounce } from "lodash";
import { DEBOUNCE_TIME, SLEEP_TIME } from "./SellModalContent";

BigNumber.config({ EXPONENTIAL_AT: 99 });

const SplitNFTModalContent = ({ data, onClose }: IModalContentProps<any>) => {
  const { nftMarketContract } = useContractsContext();
  const toast = useToast();
  const { config, balanceStatus, handleSignFunction } = useConfigContext();
  const splitStatus = useTransaction(nftMarketContract?.split, {
    wait: true,
  });

  const [feeAndPriceData, setFeeAndPriceData] = useState<any>();

  const { price, fee } = feeAndPriceData ?? {};

  const tokenStatus = useErc20({
    tokenAddress: config?.astr as string,
    approveTokenAddress: config?.nftMarket as string,
    approveAmount: price?.toString(),
  });

  const lsStatus = useErc20({
    tokenAddress: config?.ls as string,
    approveTokenAddress: config?.nftMarket as string,
    approveAmount: toWei(feeAndPriceData?.lsAmount || 0)?.toString(),
  });

  const isLoading = tokenStatus?.isLoading || lsStatus?.isLoading;

  const isLSCNotEnough = tokenStatus.balance
    ? new BigNumber(tokenStatus.balance).lt(
        fromWei(fee?.toString())?.toString()
      )
    : false;

  const isLSNotEnough = tokenStatus.balance
    ? new BigNumber(tokenStatus.balance).lt(
        feeAndPriceData?.lsAmount?.toString()
      )
    : false;

  const isSplitDisabled =
    isLSNotEnough ||
    isLSCNotEnough ||
    (feeAndPriceData?.type === ValuesEnum.LSLSC && !feeAndPriceData?.lsAmount);

  const getFeeData = (data: any) => {
    setFeeAndPriceData(data);
  };

  const handleSplit = debounce(async () => {
    try {
      if (
        new BigNumber(balanceStatus?.data?.formatted || "0").lt(TRANSFER_AMOUNT)
      ) {
        toast({
          ...toastWarningConfig,
          title: "BNB余额不足",
        });
        return;
      }

      const tokenId = data?.tokenId;
      const payValue = toWei(TRANSFER_AMOUNT)?.toString();
      const lsAmount =
        feeAndPriceData?.type === ValuesEnum.LSC
          ? 0
          : toWei(feeAndPriceData.lsAmount)?.toString();
      await handleSignFunction?.(
        data?.tokenId,
        OperationVerifyStatus.SPLITTING
      );

      await splitStatus.run(tokenId, lsAmount, {
        value: payValue,
      });

      toast({
        ...toastSuccessConfig,
        title: "拆分成功",
      });
    } catch (error) {
    } finally {
      await sleep(SLEEP_TIME);
      await data?.refetch();

      onClose?.();
    }
  }, DEBOUNCE_TIME);

  return (
    <Stack
      spacing={{ base: "20px" }}
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text type="gradient" fontSize="24px" fontWeight="400">
        拆 分 NFT
      </Text>
      <Stack>
        {data.age === 1 && (
          <>
            <Text
              fontSize="18px"
              fontWeight="400"
              color="white.100"
              textAlign="center"
            >
              NFT将被拆分为2个碎片
            </Text>
            <Flex
              width="100%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text type="gradient" fontSize="18px" fontWeight="400">
                单价
              </Text>
              <Text fontSize="18px" fontWeight="400" color="white.100">
                505.5USDT
              </Text>
            </Flex>
          </>
        )}
        {data.age === 2 && (
          <>
            <Text
              fontSize="18px"
              fontWeight="400"
              color="white.100"
              textAlign="center"
            >
              NFT将被拆分为10个碎片
            </Text>
            <Flex
              width="100%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text type="gradient" fontSize="18px" fontWeight="400">
                单价
              </Text>
              <Text fontSize="18px" fontWeight="400" color="white.100">
                100USDT
              </Text>
            </Flex>
          </>
        )}
      </Stack>
      <Fee data={data} type={OperateEnum.Split} onGetData={getFeeData} />
      {isLSCNotEnough && (
        <Text
          alignSelf="flex-start"
          marginBottom="10px"
          color="red.200"
          fontFamily="PingFang SC"
        >
          LSC余额不足
        </Text>
      )}
      {isLSNotEnough && (
        <Text
          alignSelf="flex-start"
          marginBottom="10px"
          color="red.200"
          fontFamily="PingFang SC"
        >
          LS余额不足
        </Text>
      )}
      <Stack
        spacing="20px"
        direction="column"
        width="100%"
        justifyContent="center"
      >
        {!isLoading && !tokenStatus?.isEnough && (
          <BaseButton
            colorScheme="gold"
            color="black.100"
            fontSize="18px"
            isDisabled={tokenStatus?.isEnough}
            onClick={() => {
              tokenStatus?.approveState?.run?.();
            }}
            isLoading={tokenStatus?.approveState?.loading}
          >
            授权 LSC
          </BaseButton>
        )}

        {!isLoading && feeAndPriceData?.lsAmount > 0 && !lsStatus?.isEnough && (
          <BaseButton
            colorScheme="gold"
            color="black.100"
            fontSize="18px"
            isDisabled={lsStatus?.isEnough}
            onClick={() => {
              lsStatus?.approveState?.run?.();
            }}
            isLoading={lsStatus?.approveState?.loading}
          >
            授权LS
          </BaseButton>
        )}

        <BaseButton
          colorScheme="gold"
          color="black.100"
          fontSize="18px"
          isDisabled={isSplitDisabled}
          isLoading={splitStatus?.loading}
          onClick={handleSplit}
        >
          确 认 拆 分
        </BaseButton>
      </Stack>
    </Stack>
  );
};

export default SplitNFTModalContent;
