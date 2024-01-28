import { Flex } from "@chakra-ui/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import NFTTradingPage from "@/components/NFTTradingPage";
// import MintFragmentPage from "@/components/MintFragmentPage";
import px2vw from "@/theme/utils/px2vw";
import { useEffect, useMemo, useState } from "react";
import Tabs from "@/components/Tabs";
import Text from "@/components/Text";
import dayjs from "dayjs";
import { TEN_MINUTES } from "@/components/NewHome";
import { useQuery } from "@tanstack/react-query";
import { marketTotal } from "@/apis/v2";

type Props = {
  // Add custom props here
};

const defaultBody = {
  page: 1,
  pageSize: 10,
  tokenId: "",
};

const ONE_MINUTE = 60 * 1000;
const ONE_SECOND = 1000;

export default function MarKet(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const [body, setBody] = useState({
    0: {
      age: 0,
      ...defaultBody,
    },
    1: {
      age: 1,
      ...defaultBody,
    },
    2: {
      age: 2,
      ...defaultBody,
    },
    3: {
      age: 3,
      ...defaultBody,
    },
  });
  const [countDownTime, setCountDownTime] = useState<{
    minutes: number;
    seconds: number;
  }>();

  const isCountTime = !!countDownTime;

  const { data, refetch } = useQuery(["marketTotal"], async () => {
    const res = await marketTotal();
    return res?.data;
  });

  useEffect(() => {
    let timer: string | number | NodeJS.Timer | null | undefined = null;
    let currentTime = dayjs();
    const targetTime = dayjs()
      .set("hour", 14)
      .set("minute", 0)
      .set("second", 0);

    let timeDifference = targetTime.diff(currentTime);
    let isLessThanTenMinutes =
      timeDifference > 0 && timeDifference < TEN_MINUTES;
    if (isLessThanTenMinutes) {
      timer = setInterval(() => {
        currentTime = dayjs();
        timeDifference = targetTime.diff(currentTime);
        isLessThanTenMinutes =
          timeDifference > 0 && timeDifference < TEN_MINUTES;
        if (!isLessThanTenMinutes) {
          timer && clearInterval(timer);
          setCountDownTime(undefined);
        } else {
          const minutes = Math.floor(timeDifference / ONE_MINUTE);
          const seconds = Math.floor(
            (timeDifference % ONE_MINUTE) / ONE_SECOND
          );
          setCountDownTime({
            minutes,
            seconds,
          });
        }
      }, 1000);
    }
    return () => {
      timer && clearInterval(timer);
    };
  }, []);

  return (
    <>
      {isCountTime && (
        <Flex
          position="fixed"
          w="100vw"
          h="100vh"
          top={0}
          zIndex={999}
          justify="center"
          alignItems="center"
          bg="rgba(24,23,39,0.8)"
        >
          <Text fontSize="28px" color="white.100">
            开放倒计时：{countDownTime?.minutes}m:{countDownTime?.seconds}s
          </Text>
        </Flex>
      )}

      <Flex
        mt={{ base: px2vw(10), lg: "30px" }}
        padding={{ base: `0 ${px2vw(20)}`, lg: "0 60px" }}
        // justifyContent="space-between"
        alignItems="center"
        minH="70vh"
        maxWidth="1440px"
        margin="0 auto"
        flexDirection="column"
        as="main"
      >
        <Text
          marginBottom={px2vw(15)}
          type="gradient"
          fontSize="24px"
          fontWeight="400"
        >
          NFT交易市场
        </Text>
        <Flex
          gap={20}
          width="100%"
          alignItems="center"
          justifyContent="space-between"
          marginTop={px2vw(20)}
          marginBottom={px2vw(20)}
        >
          <Flex
            flex={1}
            width="100%"
            fontSize="16px"
            fontWeight="400"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text type="gradient">今日卡量</Text>
            <Text color="white.100">{data?.totalSellNum ?? "--"}</Text>
          </Flex>

          <Flex
            flex={1}
            width="100%"
            fontSize="16px"
            fontWeight="400"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text type="gradient">剩余卡量</Text>
            <Text color="white.100">{data?.remainNum ?? "--"}</Text>
          </Flex>
        </Flex>

        {/* 顶部 */}
        <Flex justifyContent="space-between" pos="relative" w="full">
          {/* Tabs */}
          <Tabs
            w="full"
            data={[
              {
                label: "全部",
                content: (
                  <NFTTradingPage
                    age={0}
                    requestBody={body[`0`]}
                    setBody={setBody}
                    marketRefresh={refetch}
                  />
                ),
              },
              {
                label: "I代卡",
                content: (
                  <NFTTradingPage
                    age={1}
                    requestBody={body[`1`]}
                    setBody={setBody}
                    marketRefresh={refetch}
                  />
                ),
              },
              {
                label: "II代卡",
                content: (
                  <NFTTradingPage
                    age={2}
                    requestBody={body[`2`]}
                    setBody={setBody}
                    marketRefresh={refetch}
                  />
                ),
              },
              {
                label: "III代卡",
                content: (
                  <NFTTradingPage
                    age={3}
                    requestBody={body[`3`]}
                    setBody={setBody}
                    marketRefresh={refetch}
                  />
                ),
              },
            ]}
          />
        </Flex>
      </Flex>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "cn", [
      "market",
      "common",
      "footer",
    ])),
  },
});
