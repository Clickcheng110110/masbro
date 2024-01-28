import px2vw from "@/theme/utils/px2vw";
import { bsc, bscTestnet } from "viem/chains";
import { Flex, Stack, Box } from "@chakra-ui/react";
import React from "react";
import Text from "@/components/Text";

import Table, { Column } from "@/components/Table";
import { nftRewardList } from "@/apis/v2";
import { useConfigContext } from "@/context/ConfigContext";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import FetchTemplate from "@/components/FetchTemplate";

import { formatValue } from "@/utils/common";
import { OperationHeader } from "./reward";
import BigNumber from "bignumber.js";
import { isDev } from "@/utils/request";

export interface OperationHeaderProps {
  route: string;
  title: string;
}

const columns: Column[] = [
  {
    dataIndex: "transType",
    title: "交易类型",
    width: px2vw(90),
  },
  {
    dataIndex: "amount",
    title: "数量(USDT)",
    width: px2vw(90),
  },
  {
    dataIndex: "blockTime",
    title: "交易时间",
    width: px2vw(165),
    render: (record) => {
      return (
        <Stack direction="row" alignItems="center">
          <Text fontSize="12px">{record?.blockTime}</Text>
          <Flex
            onClick={() => {
              window.open(
                isDev
                  ? `${bscTestnet.blockExplorers.etherscan.url}/tx/${record?.transHash}`
                  : `${bsc.blockExplorers.etherscan.url}/tx/${record?.transHash}`
              );
            }}
            width={px2vw(64)}
            height={px2vw(24)}
            justifyContent="center"
            alignItems="center"
            bg="linear-gradient(180deg, #BBDFF1 0%, #C4A9F3 100%)"
            color="black.100"
            fontSize="12px"
            borderRadius="12px"
          >
            查看Hash
          </Flex>
        </Stack>
      );
    },
  },
];

function Index() {
  const { address } = useConfigContext();

  const rewardListStatus = useQuery(
    ["nftrewardListStatus", address],
    async () => {
      const res = await handleGetRewardList();
      const formatRes = (res?.data || []).map((item: any) => {
        return {
          ...item,
          amount: new BigNumber(item?.amount).isGreaterThan(0)
            ? formatValue(item?.amount)
            : "--",

          blockTime: dayjs(item.blockTime).format("MM.DD HH:mm:ss"),
        };
      });
      return formatRes;
    },
    {
      enabled: !!address,
    }
  );

  const handleGetRewardList = async () => {
    const res = await nftRewardList({ address: address as `0x${string}` });
    return res;
  };

  return (
    <Flex flexDirection="column" px={px2vw(20)} alignItems="center">
      <OperationHeader route="/personal" title="NFT交易记录" />
      <Box marginTop={px2vw(40)}>
        <FetchTemplate
          loading={rewardListStatus.isLoading}
          empty={rewardListStatus?.data?.length == 0}
        >
          <Table data={rewardListStatus.data || []} columns={columns} />
        </FetchTemplate>
      </Box>
    </Flex>
  );
}

export default Index;
