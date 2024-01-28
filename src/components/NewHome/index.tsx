import {
  Box,
  Flex,
  Image,
  Stack,
  UseToastOptions,
  useToast,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import dayjs from "dayjs";
import { multicall } from "@wagmi/core";
import { useQuery } from "@tanstack/react-query";
import BigNumber from "bignumber.js";

import { formatTime, formatValue, getTimeDiff, toWei } from "@/utils/common";
import useErc20 from "@/hooks/useErc20";
import px2vw from "@/theme/utils/px2vw";
import Text from "@/components/Text";
import BaseButton from "@/components/BaseButton";
import { useContractsContext } from "@/context/ContractsContext";
import { ConfigContext, useConfigContext } from "@/context/ConfigContext";
import { NftMarket__factory } from "@/contracts/interface";

import banner1 from "@/assets/images/banner1.png";
import banner2 from "@/assets/images/banner2.png";

import leo from "@/assets/images/leoCon.png";
import baiyang from "@/assets/images/baiyang.png";
import jinniu from "@/assets/images/jinniu.png";
import shuangzi from "@/assets/images/shuangzi.png";
import juxie from "@/assets/images/juxie.png";
import chunv from "@/assets/images/chunv.png";
import sheshou from "@/assets/images/sheshou.png";
import tianping from "@/assets/images/tianping.png";
import tianxie from "@/assets/images/tianxie.png";
import mojie from "@/assets/images/mojie.png";
import shuiping from "@/assets/images/shuiping.png";
import shuangyu from "@/assets/images/shuangyu.png";
import baiyangCard from "@/assets/images/baiyangCard.png";
import jinniuCard from "@/assets/images/jinniuCard.png";
import shuangzicard from "@/assets/images/shuangzicard.png";
import juexieCard from "@/assets/images/juexieCard.png";
import shiziCard from "@/assets/images/shiziCard.png";
import chunvCard from "@/assets/images/chunvCard.png";
import tianchengCard from "@/assets/images/tianchengCard.png";
import tianxieCard from "@/assets/images/tianxieCard.png";
import sheshouCard from "@/assets/images/sheshouCard.png";
import mojieCard from "@/assets/images/mojieCard.png";
import shuipingCard from "@/assets/images/shuipingCard.png";
import shuangyuCard from "@/assets/images/shuangyuCard.png";

import collectCon from "@/assets/images/collectCon.png";
import marketCn from "@/assets/images/marketCn.png";
import random from "@/assets/images/random.png";

import "swiper/css";
import useTransaction from "@/hooks/useTransaction";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import { TRANSFER_AMOUNT } from "../Modals/InviteModalContent";

// import { getLSCPrice } from "@/apis/token";

export const TEN_MINUTES = 10 * 60 * 1000; // 一小时的毫秒数

enum CountdownStatus {
  NotStart,
  Time,
  Going,
  End,
}

export const swiperData = [
  {
    name: "水瓶座",
    con: shuiping,
    text: "独立思考、创新求变、友善进取",
    card: shuipingCard,
  },
  {
    name: "双鱼座",
    con: shuangyu,
    text: "敏感温情、富有想象力、善解人意",
    card: shuangyuCard,
  },
  {
    name: "白羊座",
    con: baiyang,
    text: "积极冲动、勇往直前、热血激情",
    card: baiyangCard,
  },
  {
    name: "金牛座",
    con: jinniu,
    text: "稳重务实、忠诚可靠、享受生活",
    card: jinniuCard,
  },
  {
    name: "双子座",
    con: shuangzi,
    text: "聪明灵活、口才出众、充满好奇",
    card: shuangzicard,
  },
  {
    name: "巨蟹座",
    con: juxie,
    text: "情感丰富、善解人意、家庭至上",
    card: juexieCard,
  },
  {
    name: "狮子座",
    con: leo,
    text: "自信阳光、领导力强、热心慷慨",
    card: shiziCard,
  },
  {
    name: "处女座",
    con: chunv,
    text: "细致谨慎、追求完美、务实可靠",
    card: chunvCard,
  },
  {
    name: "天秤座",
    con: tianping,
    text: "公正平衡、追求和谐、人际交往强",
    card: tianchengCard,
  },
  {
    name: "天蝎座",
    con: tianxie,
    text: "深沉神秘、独立自主、坚持原则",
    card: tianxieCard,
  },
  {
    name: "射手座",
    con: sheshou,
    text: "乐观开朗、好冒险、追求自由",
    card: sheshouCard,
  },

  {
    name: "摩羯座",
    con: mojie,
    text: "自律坚毅、目标导向、踏实可靠",
    card: mojieCard,
  },
];

export const toastSuccessConfig: UseToastOptions = {
  position: "top",
  status: "success",
  duration: 3000,
  isClosable: true,
};

export const toastWarningConfig: UseToastOptions = {
  position: "top",
  status: "warning",
  duration: 3000,
  isClosable: true,
};

export const toastErrorConfig: UseToastOptions = {
  position: "top",
  status: "error",
  duration: 3000,
  isClosable: true,
};

function Index() {
  const router = useRouter();
  const { t } = useTranslation(["common"]);
  const [countDownTime, setCountDownTime] = useState<any>();
  const toast = useToast();
  const { config, balanceStatus } = useConfigContext();
  const { address } = useContext(ConfigContext);
  const { lpContract, nftMarketContract } = useContractsContext();

  const getLSCPrice = async () => {
    try {
      const res = await lpContract?.getReserves();
      if (!res?._reserve1 || !res?._reserve0) {
        return {
          unitPrice: "--",
          liquidity: "--",
        };
      }
      const unitPrice = new BigNumber(res?._reserve1.toString())
        .dividedBy(res?._reserve0?.toString())
        ?.toFixed(4);
      const liquidity = formatValue(
        new BigNumber(res?._reserve1?.toString()).multipliedBy(2)?.toString(),
        true
      );
      return {
        unitPrice,
        liquidity,
      };
    } catch (error) {}
  };

  const getCountDown = async () => {
    try {
      const now = new Date().getTime();
      const startTime = await nftMarketContract?.startTime();
      const fixStartTime = (startTime?.toNumber() as number) * 1000;
      if (!fixStartTime) {
        return {
          status: CountdownStatus.End,
          value: 0,
        };
      }
      if (fixStartTime < Number(now)) {
        return {
          status: CountdownStatus.Going,
          value: fixStartTime,
        };
      } else {
        if (fixStartTime - now > TEN_MINUTES) {
          const date = dayjs(fixStartTime);
          const hours = date.format("HH");
          const minutes = date.format("mm");
          const seconds = date.format("ss");

          return {
            status: CountdownStatus.Time,
            value: `${hours}h:${minutes}m:${seconds}s`,
          };
        } else {
          return {
            status: CountdownStatus.NotStart,
            value: fixStartTime,
          };
        }
      }
    } catch (error) {}
  };

  const getMarketInfo = async () => {
    try {
      const data = await multicall({
        contracts: [
          {
            address: nftMarketContract?.address as `0x${string}`,
            abi: NftMarket__factory.abi,
            functionName: "totalShare",
          },
          {
            address: nftMarketContract?.address as `0x${string}`,
            abi: NftMarket__factory.abi,
            functionName: "star",
          },
        ],
      });

      return data;
    } catch (error) {}
  };

  const { data } = useQuery({
    queryKey: ["getLSCPrice", lpContract?.address],
    queryFn: async ({ queryKey }) => {
      if (!queryKey[1]) return undefined;
      const res = await getLSCPrice();
      return res;
    },
    enabled: !!lpContract?.address,
    refetchInterval: 5000,
  });

  const countdownStatus = useQuery({
    queryKey: ["countdownStatus", nftMarketContract?.address],
    queryFn: async ({ queryKey }) => {
      if (!queryKey[1]) return undefined;
      const res = await getCountDown();
      return res;
    },
    enabled: !!nftMarketContract?.address,
    refetchOnWindowFocus: false,
  });

  const marketInfoStatus = useQuery({
    queryKey: ["marketInfoStatus", nftMarketContract?.address],
    queryFn: async ({ queryKey }) => {
      if (!queryKey[1]) return undefined;
      const res = await getMarketInfo();
      return res;
    },
    enabled: !!nftMarketContract?.address,
  });

  const startTime: any = countdownStatus?.data;
  const totalShare = marketInfoStatus?.data?.[0]?.result?.toString();
  const star = marketInfoStatus?.data?.[1]?.result;

  const { isEnough, approveState } = useErc20({
    tokenAddress: config?.usdt as string,
    approveTokenAddress: config?.nftMarket as string,
  });

  const nftIdoStatus = useTransaction(nftMarketContract?.nftIdo, {
    wait: true,
  });

  const renderPagination = () => {
    if (!totalShare) return <></>;
    const array = new Array(Number(totalShare)).fill(1);
    return (array || []).map((item, index) => (
      <Box
        key={index}
        borderRadius="50%"
        width={px2vw(6)}
        height={px2vw(6)}
        bg="white.60"
      />
    ));
  };

  const handleNftIdo = async () => {
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

      await nftIdoStatus.run({
        value: ethers.utils.parseUnits(TRANSFER_AMOUNT),
      });
      toast({
        ...toastSuccessConfig,
        title: "抢购成功",
      });
      marketInfoStatus?.refetch();
    } catch (error) {}
  };

  useEffect(() => {
    if (!address) return;
    // getData();
    // getTotalTokenAmount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | null | undefined = null;
    if (!countdownStatus.data) return;
    if (countdownStatus.data.status === CountdownStatus.NotStart) {
      timer = setInterval(() => {
        const startTime = new Date().getTime();
        const endTime = countdownStatus?.data?.value as number;
        const diff = getTimeDiff(startTime, endTime);
        if (diff.minutes < 0 && diff.seconds < 0) {
          countdownStatus.refetch();
          timer && clearInterval(timer);
        }
        setCountDownTime(diff);
      }, 1000);
    }
    return () => {
      timer && clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countdownStatus.data]);

  return (
    <Flex
      w="full"
      flexDir="column"
      alignItems="center"
      // paddingBottom={px2vw(80)}
    >
      <Image src={banner1} ignoreFallback width={px2vw(301)} />
      <Stack
        width="100%"
        marginTop={px2vw(31)}
        spacing={px2vw(10)}
        alignItems="center"
        color="blue.100"
        fontWeight="400"
        fontSize="16px"
      >
        <Flex
          fontSize="20px"
          width="100%"
          justifyContent="space-between"
          color="white.100"
        >
          <Text>$ {data?.liquidity || "--"}</Text>
          <Text>$ {data?.unitPrice || "--"}</Text>
        </Flex>
        <Flex
          fontSize="14px"
          width="100%"
          justifyContent="space-between"
          color="blue.100"
        >
          <Text>LSC 底池</Text>
          <Text>LSC 单价</Text>
        </Flex>
      </Stack>
      {countdownStatus.isFetched ? (
        <Flex
          marginTop={px2vw(30)}
          marginBottom={px2vw(50)}
          fontSize="24px"
          color="white.100"
          justifyContent="space-between"
          alignItems="center"
        >
          {startTime?.status === CountdownStatus.NotStart && (
            <>
              <Text>{t("Casting Countdown")}</Text>
              <Text>：</Text>
              <Text>
                {formatTime(countDownTime?.minutes)}m:
                {formatTime(countDownTime?.seconds)}s
              </Text>
            </>
          )}
          {startTime?.status === CountdownStatus.Going &&
            Number(totalShare) !== 0 && (
              <>
                <Text>{t("Casting Countdown")}</Text>
                <Text>：</Text>
                <Text>抢购中</Text>
              </>
            )}
          {startTime?.status === CountdownStatus.Going &&
            Number(totalShare) === 0 && (
              <>
                <Text>{t("Casting Countdown")}</Text>
                <Text>：</Text>
                <Text>抢购结束</Text>
              </>
            )}
          {startTime?.status === CountdownStatus.Time && (
            <>
              <Text>铸造时间</Text>
              <Text>：</Text>
              <Text>{startTime?.value}</Text>
            </>
          )}

          {startTime?.status === CountdownStatus.End && (
            <>
              <Text>{t("Casting Countdown")}</Text>
              <Text>：</Text>
              <Text>敬请期待</Text>
            </>
          )}
        </Flex>
      ) : (
        <Box marginTop={px2vw(30)} marginBottom={px2vw(50)}></Box>
      )}

      <Flex width="100%" justifyContent="center">
        <Flex
          position="relative"
          flexDirection="column"
          width={px2vw(260)}
          height={px2vw(480)}
          alignItems="center"
        >
          <Image
            src={swiperData?.[Number(`${star}`)]?.card}
            ignoreFallback
            width={px2vw(240)}
            height={px2vw(324)}
          />

          <Image
            position="absolute"
            right={px2vw(-47)}
            bottom={px2vw(80)}
            src={swiperData?.[Number(`${star}`)]?.con}
            width={px2vw(186)}
            height={px2vw(180)}
            ignoreFallback
          />
          <Text
            marginTop={px2vw(23)}
            marginBottom={px2vw(43)}
            alignSelf="flex-start"
            type="gradient"
            fontSize="24px"
            fontWeight="400"
          >
            {swiperData?.[Number(`${star}`)]?.name}
          </Text>
          <Text color="blue.500" fontSize="16px" fontWeight="400">
            {swiperData?.[Number(`${star}`)]?.text}
          </Text>
        </Flex>
      </Flex>

      <Stack mb={px2vw(20)} direction="row" spacing={px2vw(15)}>
        {renderPagination()}
      </Stack>

      {Number(totalShare) ? (
        isEnough ? (
          <BaseButton
            isLoading={nftIdoStatus.loading}
            isDisabled={
              nftIdoStatus.loading ||
              !(startTime?.status === CountdownStatus.Going)
            }
            onClick={handleNftIdo}
            flexShrink={0}
            width={px2vw(205)}
            borderRadius="23px"
            border="1.4px solid #BBDFF1"
            fontSize="18px"
          >
            <Text type="gradient">100USDT 抢购</Text>
          </BaseButton>
        ) : (
          <BaseButton
            onClick={() => {
              approveState.run();
            }}
            isLoading={approveState.loading}
            isDisabled={
              approveState.loading ||
              !(startTime?.status === CountdownStatus.Going)
            }
            flexShrink={0}
            width={px2vw(205)}
            borderRadius="23px"
            border="1.4px solid #BBDFF1"
            fontSize="18px"
          >
            <Text type="gradient">授权USDT</Text>
          </BaseButton>
        )
      ) : (
        <></>
      )}

      <Image
        onClick={() => {
          router.push("/market");
        }}
        marginTop={px2vw(60)}
        marginBottom={px2vw(60)}
        width={px2vw(220)}
        height={px2vw(273)}
        src={marketCn}
      />

      <Image
        src={collectCon}
        ignoreFallback
        width={px2vw(270)}
        height={px2vw(160)}
      />
      <Image
        marginTop={px2vw(30)}
        marginBottom={px2vw(30)}
        src={banner2}
        width={px2vw(240)}
        height={px2vw(324)}
      />
      <Stack
        spacing={px2vw(10)}
        color="white.100"
        fontSize="16px"
        letterSpacing="3px"
        fontWeight="400"
        alignItems="flex-start"
      >
        <Text>每一个星座NFT碎片</Text>
        <Text>都是合成完整星座NFT的关键</Text>
        <Text>收集碎片</Text>
        <Text>将它们合到一起</Text>
        <Text>你将会得到完整的星座NFT</Text>
        <Text>同时还将获得丰厚的奖励</Text>
      </Stack>

      <BaseButton
        onClick={() => {
          router.push("/synthesisDetail");
        }}
        marginTop={px2vw(40)}
        flexShrink={0}
        width={px2vw(205)}
        borderRadius="23px"
        border="1.4px solid #BBDFF1"
        fontSize="18px"
      >
        <Text type="gradient">合成我的NFT碎片</Text>
      </BaseButton>
    </Flex>
  );
}
export default Index;
