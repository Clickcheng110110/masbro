import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { Component, useState } from "react";

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
import { useContracts, useContractsContext } from "@/context/ContractsContext";
import { useConfig, useConfigContext } from "@/context/ConfigContext";
import { useMutation, useQuery } from "@tanstack/react-query";
import { formatValue, fromWei, toWei } from "@/utils/common";
import { buttonHover } from "@/theme/utils/style";

export enum ModeEnum {
  ETH = "eth",
  BEGGAR = "beggar",
}

function Index() {
  const { watch, reset, control, setValue } = useForm<
    Record<string, number | string>
  >({
    // defaultValues: formDefaultValues,
  });

  const values = watch();

  const { routerV2Contract } = useContractsContext();
  const { config } = useConfigContext();

  const [mode, setMode] = useState<ModeEnum>(ModeEnum.ETH);

  const getAmountsOut = async (amountIn: string) => {
    const formatAmountIn = toWei(amountIn)?.toString();
    const amountOut = await routerV2Contract?.getAmountsOut(formatAmountIn, [
      config?.weth as string,
      config?.beg as string,
    ]);

    return amountOut;
  };
  const getAmountOutQuery = useQuery({
    queryKey: ["getAmountOut", values.ETH],
    queryFn: ({ queryKey }) => {
      if (!queryKey[1]) return null;
      const res: any = getAmountsOut(queryKey[1] as string);
      setValue("Beggar", fromWei(res?.[1]?.toString() as string)?.toString());
      return res;
    },
  });

  const getAmountOutInitQuery = useQuery({
    queryKey: ["getAmountOutOnce"],
    queryFn: () => {
      const res: any = getAmountsOut("1");
      return res;
    },
  });

  const ethTransferBagger = formatValue(
    getAmountOutInitQuery?.data?.[1]?.toString() as string,
    true
  );
  const beggarTransferEth = formatValue(
    getAmountOutInitQuery?.data?.[0]?.toString() as string,
    true
  );

  return (
    <Flex
      width="100%"
      position="relative"
      flexDirection="column"
      //   justifyContent="center"
      alignItems="center"
      h="950px"
      w="1224px"
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
      <Image width="280px" height="87px" marginTop="94px" src={begWap} />

      <Flex
        zIndex={10}
        width="808px"
        h="510px"
        marginTop="40px"
        padding="32px 48px"
        flexDirection="column"
        bg="#000"
        border="1px solid #FFF"
      >
        <Flex
          width="100%"
          marginBottom="24px"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text color="#FFF" fontSize="32px" lineHeight="32px" fontWeight="400">
            Swap
          </Text>
          <Flex gap="12px">
            <Text
              color="#FFF"
              fontSize="24px"
              lineHeight="24px"
              fontWeight="400"
            >
              Slippage: 0.1%
            </Text>
            <Image width="24px" height="24px" src={wapChange} />
          </Flex>
        </Flex>
        <TokenInput control={control} title="You pay" token={ETH} name="ETH" />
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
                width="20px"
                height="12px"
                transform="rotate(-45deg)"
                src={tokenSelect}
              />
            </Flex>
          </Flex>
        </Box>
        <TokenInput
          control={control}
          title="You receive"
          token={beggarToken}
          name="Beggar"
        />
        <Flex margin="24px 0" alignItems="center" gap="12px">
          {mode === ModeEnum.ETH ? (
            <Text fontSize="24px" fontWeight="400">
              1 ETH ≈ {ethTransferBagger} Beggar
            </Text>
          ) : (
            <Text fontSize="24px" fontWeight="400">
              1 Beggar ≈ {beggarTransferEth} ETH
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
        <BaseButton colorType="white" bgImage={whiteButtonLongBg}>
          Swap
        </BaseButton>
      </Flex>
      <Flex
        position="absolute"
        left="230px"
        top="244px"
        width="808px"
        h="510px"
        padding="32px 48px"
        flexDirection="column"
        border="1px solid #FFF"
      ></Flex>
    </Flex>
  );
}

export default Index;
