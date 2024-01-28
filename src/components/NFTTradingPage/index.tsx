import px2vw from "@/theme/utils/px2vw";
import {
  Flex,
  Input,
  Image,
  InputGroup,
  InputRightElement,
  Text,
  Spinner,
  Box,
} from "@chakra-ui/react";
import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
import useModal from "@/hooks/useModal";
import BuyModalContent from "@/components/Modals/BuyModalContent";

import NFTTradingCard, { TradingData } from "../NFTTradingCard";
import BaseButton from "../BaseButton";
import { useTranslation } from "react-i18next";
import { uniqBy } from "lodash";
import { getMarketNFT } from "@/apis/v2";
import { useQuery } from "@tanstack/react-query";
import RefreshButton from "../RefreshButton";
import magnifier from "@/assets/images/magnifier.svg";
import useErc20 from "@/hooks/useErc20";
import { useConfigContext } from "@/context/ConfigContext";
import dayjs from "dayjs";
import useInfiniteScroll from "react-infinite-scroll-hook";
export const defaultPageSize = 10;
export const currentAge = 1;

interface IProps {
  age: number;
  requestBody: { page: number; pageSize: number; tokenId: string };
  setBody: Dispatch<SetStateAction<any>>;
  marketRefresh: () => void;
}

function Index({ age, requestBody, setBody, marketRefresh }: IProps) {
  const { t } = useTranslation("common");
  const [isRefreshed, setIsRefreshed] = useState(false);
  const [list, setList] = useState<TradingData[]>([]);
  const [tokenId, setTokenId] = useState("");
  const { config, address } = useConfigContext();
  const [finalTokenId, setFinalTokenId] = useState<number>();
  const [random, setRandom] = useState(0);
  const { balance } = useErc20({
    tokenAddress: config?.usdt as string,
    approveTokenAddress: config?.nftMarket as string,
  });
  const { data, isLoading } = useQuery(
    ["oneDataStatus", age, requestBody.page, finalTokenId, random, balance],
    async ({ queryKey }) => {
      return getMarketNFT(
        queryKey[1] as number,
        queryKey[2] as number,
        requestBody.pageSize,
        queryKey[3] as string,
        balance as string
      );
    },
    {
      cacheTime: 0,
      refetchOnWindowFocus: false,
      enabled: !!balance && !!address,
    }
  );

  const [BuyModal, BuyModalStatus] = useModal(BuyModalContent, {
    modalBodyProps: {
      p: { base: px2vw(10), lg: "10px" },
    },
    hasTopRightCloseButton: false,
    hasBottomRightCloseButton: true,
    hasGradientBorder: false,
    // data: {
    //   activeItem: activeItem,
    // },
  });

  const isOpenMarket = useMemo(() => {
    const currentTime = dayjs();
    const afternoon2pm = dayjs()
      .set("hour", 14)
      .set("minute", 0)
      .set("second", 0);
    const afternoon4pm = dayjs()
      .set("hour", 16)
      .set("minute", 0)
      .set("second", 0);

    const isBetween2pmAnd4pm =
      currentTime.isAfter(afternoon2pm) && currentTime.isBefore(afternoon4pm);
    return isBetween2pmAnd4pm;
  }, []);

  const hasNextPage =
    list?.length && data?.data?.list.length === requestBody.pageSize;

  const handleRefresh = () => {
    const timeStrap = new Date().getTime();
    setIsRefreshed(true);
    setTokenId("");
    setFinalTokenId(undefined);
    setRandom(timeStrap);
    marketRefresh();
    setBody((prev: any) => {
      const prevRequest = prev[`${age}`];
      prevRequest.page = 1;

      return {
        ...prev,
        [age]: prevRequest,
      };
    });
  };

  const handleMore = () => {
    setBody((prev: any) => {
      const prevRequest = prev[`${age}`];
      prevRequest.page = prevRequest.page + 1;
      return {
        ...prev,
        [age]: prevRequest,
      };
    });
    // page[activeOption.id] = page[activeOption.id] + 8;
    // setPage(page + 1);
  };

  const [sentryRef] = useInfiniteScroll({
    loading: false,
    hasNextPage: !!hasNextPage, // Set to false when there's no more data to load
    onLoadMore: handleMore,
    rootMargin: "0px 0px 100px 0px",
  });

  useEffect(() => {
    if (data) {
      setList(uniqBy([...list, ...data?.data?.list], "tokenId"));
    }
  }, [data]);

  useEffect(() => {
    if (isRefreshed) {
      if (!isLoading) {
        setIsRefreshed(false);
        setList([...data?.data?.list]);
      }
    }
  }, [isRefreshed, isLoading]);

  return (
    <Flex flexDir="column">
      {isOpenMarket ? (
        <></>
      ) : (
        <Text
          my="20px"
          border="1px solid "
          padding="10px"
          borderRadius="15px"
          color="blue.500"
          fontSize="24px"
          textAlign="center"
        >
          开市时间:14:00-16:00
        </Text>
      )}

      <Flex flexWrap="wrap" id="scroll">
        {list?.length ? (
          list?.map((item: TradingData, index: number) => {
            return (
              <NFTTradingCard
                mr={{
                  base: `${(index + 1) % 2 === 0 ? 0 : px2vw(25)}`,
                  lg: `${(index + 1) % 4 === 0 ? 0 : "50px"}`,
                }}
                mb={{ base: px2vw(30), lg: "40px" }}
                buttonProps={{
                  children: "购买",
                  color: "black.100",
                  onClick: async () => {
                    BuyModalStatus?.onOpen({
                      ...item,
                      price: item.sellPrice,
                      refetch: handleRefresh,
                    });
                  },
                }}
                data={{ ...item, price: item.sellPrice }}
                key={index}
              />
            );
          })
        ) : (
          <Text textStyle="24" mx="auto">
            No Data
          </Text>
        )}
      </Flex>
      <Box ref={sentryRef} style={{ height: "10px" }} />

      {isLoading && list.length > 0 ? <Spinner alignSelf="center" /> : <></>}
      {/* {list?.length && data?.data?.list.length === requestBody.pageSize ? (
        <BaseButton
          mx="auto"
          w={{ base: px2vw(275), lg: "275px" }}
          h={{ base: px2vw(46), lg: "46px" }}
          fontSize={{ base: px2vw(18), lg: "18px" }}
          lineHeight={{ base: px2vw(46), lg: "46px" }}
          borderRadius={{ base: px2vw(23), lg: "12px" }}
          border="1px solid"
          borderColor="blue.500"
          color="blue.500"
          onClick={handleMore}
        >
          加载更多
        </BaseButton>
      ) : null} */}
      {BuyModal}
      {/* 刷新按钮 */}
      <RefreshButton isRefreshed={isRefreshed} onClick={handleRefresh} />
    </Flex>
  );
}
export default Index;
