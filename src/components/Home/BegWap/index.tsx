import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";

import begWap from "@/assets/images/begWap.png";
import wapBg from "@/assets/images/wap-bg.png";
import wapChange from "@/assets/images/wap-change.svg";
import TokenInput from "@/components/TokenInput";

import ETH from "@/assets/images/ETH.png";
import beggarToken from "@/assets/images/beggar-token.png";
import tokenSelect from "@/assets/images/tokenSelect.svg";
import change from "@/assets/images/change.svg";
import whiteButtonLongBg from "@/assets/images/white-button-long-bg.png";

import BaseButton from "@/components/BaseButton";
import { useForm } from "react-hook-form";
import { useContractsContext } from "@/context/ContractsContext";
import { useConfigContext } from "@/context/ConfigContext";
import { useQuery } from "@tanstack/react-query";
import { formatValue, fromWei, toWei } from "@/utils/common";
import { buttonHover } from "@/theme/utils/style";
import BigNumber from "bignumber.js";
import useTransaction from "@/hooks/useTransaction";
import useErc20 from "@/hooks/useErc20";
import { useBalance } from "wagmi";
import useModal from "@/hooks/useModal";
import SlippageContent from "@/components/ModalContents/SlippageContent";
import { getLocalStorage } from "@/utils/storage";
import { storages } from "@/utils/constans";
import InfoBox, { toastOption } from "@/components/TransToast";
import { toast } from "react-toastify";
import px2vw from "@/theme/utils/px2vw";

export enum ModeEnum {
  ETH = "eth",
  BEGGAR = "beggar",
}

const ONE_HOUR = 60 * 60;

function Index() {
  const { watch, reset, control, setValue } = useForm<
    Record<string, number | string>
  >({
    // defaultValues: formDefaultValues,
  });
  const values = watch();
  const { routerV2Contract } = useContractsContext();
  const { config, address } = useConfigContext();
  const { run, loading } = useTransaction(
    routerV2Contract?.swapExactETHForTokens,
    {
      wait: true,
    }
  );
  const {
    run: swapExactTokensForETHRun,
    loading: swapExactTokensForETHRunLoading,
  } = useTransaction(routerV2Contract?.swapExactTokensForETH, {
    wait: true,
  });

  const [isReverse, setIsReverse] = useState(false);
  const [mode, setMode] = useState<ModeEnum>(ModeEnum.ETH);

  const [SlippageModal, { onOpen: onSlippageModalOpen }] = useModal(
    SlippageContent,
    {
      width: 496,
    }
  );

  const {
    balance: beggarBalance,
    isEnough,
    approveState,
    getBalance,
  } = useErc20({
    tokenAddress: config?.beg as string,
    approveTokenAddress: config?.routerV2 as string,
  });

  const { data: ethBalanceData, refetch: ethBalanceRefetch } = useBalance({
    address: address,
  });

  const getAmountsOut = async (amountIn: string, path: [string, string]) => {
    const formatAmountIn = toWei(amountIn)?.toString();
    const amountOut = await routerV2Contract?.getAmountsOut(
      formatAmountIn,
      path
    );
    return amountOut;
  };

  const localSlippage = getLocalStorage(storages.SLIPPAGE_VALUE);
  const slippage = localSlippage * 0.01 || 0.01;

  const getAmountOutQuery = useQuery({
    queryKey: ["getAmountOut", values.input, isReverse],
    queryFn: async ({ queryKey }) => {
      if (!queryKey[1]) return null;
      if (!config) return null;
      const res: any = await getAmountsOut(
        queryKey[1] as string,
        isReverse
          ? [config?.beg as string, config.weth as string]
          : [config?.weth as string, config?.beg as string]
      );
      const amountOutMin = new BigNumber(res?.[1]?.toString() as string)
        .multipliedBy(1 - slippage)
        .toString();
      setValue("output", fromWei(amountOutMin)?.toString());
      return res;
    },
  });

  const getAmountOutInitQuery = useQuery({
    queryKey: ["getAmountOutOnce"],
    queryFn: async () => {
      const res: any = await getAmountsOut("1", [
        config?.weth as string,
        config?.beg as string,
      ]);
      return res;
    },
    refetchInterval: 5000,
  });

  const handleSwap = async () => {
    try {
      // await getAmountOutQuery.refetch();
      if (!config || !values) return;

      const amountsOut = await getAmountsOut(
        values.input as string,
        isReverse
          ? [config?.beg as string, config.weth as string]
          : [config.weth as string, config.beg as string]
      );
      const amountOutMin = new BigNumber(amountsOut?.[1]?.toString() as string)
        .multipliedBy(1 - slippage)
        .toFixed(0);
      const toWeiInput = toWei(values.input as string)?.toString();
      const deadline = Math.floor(Date.now() / 1000 + ONE_HOUR * 0.5);
      toast(
        (props) => {
          return <InfoBox {...props} />;
        },
        {
          ...toastOption,
          data: {
            title: "Swap",
            desc: `Paying ${formatValue(values?.input as string)} ${
              inputFields.tokenName
            } for ${formatValue(values?.output as string)} ${
              outputFields.tokenName
            }...`,
          },
        }
      );
      if (isReverse) {
        await swapExactTokensForETHRun(
          toWeiInput,
          amountOutMin,
          [config?.beg as string, config?.weth as string],
          address,
          deadline
        );
      } else {
        await run(
          amountOutMin,
          [config?.weth as string, config?.beg as string],
          address,
          deadline,
          {
            value: toWeiInput,
          }
        );
      }
      toast(
        (props) => {
          return <InfoBox {...props} type="success" />;
        },
        {
          ...toastOption,
          data: {
            title: "Swap successful",
            desc: `Swap ${formatValue(values?.input as string)} ${
              inputFields.tokenName
            } for ${formatValue(values?.output as string)} ${
              outputFields.tokenName
            }`,
          },
        }
      );
      ethBalanceRefetch();
      getBalance();
      reset();
      // console.log(res);
    } catch (error) {
      console.log("error", error);
    }
  };

  const ethTransferBagger = formatValue(
    getAmountOutInitQuery?.data?.[1]?.toString() as string,
    true
  );
  const beggarTransferEth = formatValue(
    getAmountOutInitQuery?.data?.[0]?.toString() as string,
    true
  );

  const ethFields = {
    token: ETH,
    tokenName: "ETH",
    balance: ethBalanceData?.formatted as string,
  };

  const baggerFields = {
    token: beggarToken,
    tokenName: "$Beg",
    balance: beggarBalance as string,
  };

  const inputFields = !isReverse ? ethFields : baggerFields;
  const outputFields = !isReverse ? baggerFields : ethFields;
  const shouldVerify = isReverse;

  const isSwapLoading =
    getAmountOutQuery?.isLoading || swapExactTokensForETHRunLoading || loading;
  const isSwapDisabled =
    !values.input ||
    !values.output ||
    !beggarBalance ||
    !ethBalanceData?.formatted;

  return (
    <Flex
      width="100%"
      position="relative"
      flexDirection="column"
      //   justifyContent="center"
      alignItems="center"
      h={{ base: "100%", md: "950px" }}
      w={{ base: "100%", md: "1224px" }}
      marginTop="-10px"
    >
      <Image
        position="absolute"
        left="0"
        right="0"
        w="100%"
        h="100%"
        opacity="0.3"
        src={wapBg}
      />
      <Image
        width={{ base: px2vw(133), md: "280px" }}
        height={{ base: px2vw(44), md: "87px" }}
        marginTop={{ base: px2vw(80), md: "94px" }}
        src={begWap}
      />

      <Flex
        zIndex={10}
        width={{ base: "95%", md: "808px" }}
        h={{ base: "100%", md: "510px" }}
        marginTop="40px"
        padding={{ base: `${px2vw(12)} ${px2vw(12)}`, md: "32px 48px" }}
        flexDirection="column"
        bg="#000"
        border="1px solid #FFF"
      >
        <Flex
          width="100%"
          marginBottom={{ base: px2vw(15), md: "24px" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Text
            color="#FFF"
            fontSize={{ base: "24px", md: "32px" }}
            lineHeight={{ base: "24px", md: "32px" }}
            fontWeight="400"
          >
            Swap
          </Text>
          <Flex gap="12px">
            <Text
              color="#FFF"
              fontSize="24px"
              lineHeight="24px"
              fontWeight="400"
            >
              Slippage: {localSlippage}%
            </Text>
            <Image
              onClick={() => {
                onSlippageModalOpen();
              }}
              width="24px"
              height="24px"
              src={wapChange}
              _hover={buttonHover}
            />
          </Flex>
        </Flex>
        <TokenInput
          isShowMax
          name="input"
          control={control}
          title="You pay"
          {...inputFields}
        />
        <Box h="6px" position="relative">
          <Flex
            justifyContent="center"
            alignItems="center"
            position="absolute"
            left="calc(50% - 24px)"
            top="calc(50% - 24px)"
            transform="rotate(45deg)"
            width="48px"
            height="48px"
            bg="#000"
          >
            <Flex
              position="absolute"
              left="calc(50% - 18px)"
              top="calc(50% - 18px)"
              justifyContent="center"
              alignItems="center"
              //   transform="rotate(45deg)"
              width="36px"
              height="36px"
              bg="#191919"
            >
              <Image
                onClick={() => {
                  setIsReverse(!isReverse);
                }}
                width="20px"
                height="12px"
                transform="rotate(-45deg)"
                src={tokenSelect}
                _hover={buttonHover}
              />
            </Flex>
          </Flex>
        </Box>
        <TokenInput
          name="output"
          isReadOnly
          control={control}
          title="You receive"
          {...outputFields}
        />
        <Flex
          margin={{ base: `${px2vw(12)} 0`, md: "24px 0" }}
          alignItems="center"
          gap="12px"
        >
          {mode === ModeEnum.ETH ? (
            <Text fontSize={{ base: "16px", md: "24px" }} fontWeight="400">
              1 ETH ≈ {ethTransferBagger} $Beg
            </Text>
          ) : (
            <Text fontSize={{ base: "16px", md: "24px" }} fontWeight="400">
              1 $Beg ≈ {beggarTransferEth} ETH
            </Text>
          )}

          <Image
            onClick={() => {
              setMode(mode === ModeEnum.ETH ? ModeEnum.BEGGAR : ModeEnum.ETH);
            }}
            src={change}
            height="24px"
            width="24px"
            _hover={buttonHover}
          />
        </Flex>
        {!isEnough && shouldVerify ? (
          <BaseButton
            onClick={() => {
              approveState.run();
            }}
            needLogin
            isLoading={approveState.loading}
            colorType="white"
            bgImage={whiteButtonLongBg}
            _loading={{
              bgImage: whiteButtonLongBg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Approve
          </BaseButton>
        ) : (
          <BaseButton
            onClick={handleSwap}
            needLogin
            isDisabled={isSwapDisabled}
            isLoading={isSwapLoading}
            colorType="white"
            bgImage={whiteButtonLongBg}
            _loading={{
              bgImage: whiteButtonLongBg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Swap
          </BaseButton>
        )}
      </Flex>
      <Flex
        display={{ base: "none", md: "flex" }}
        position="absolute"
        left="230px"
        top="244px"
        width="808px"
        h="510px"
        padding="32px 48px"
        flexDirection="column"
        border="1px solid #FFF"
      ></Flex>
      {SlippageModal}
    </Flex>
  );
}

export default Index;
