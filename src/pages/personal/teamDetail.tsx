import px2vw from "@/theme/utils/px2vw";
import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import Text from "@/components/Text";

import Table, { Column } from "@/components/Table";
import FetchTemplate from "@/components/FetchTemplate";

import useUserStore from "@/stores/user";
import { formatAddress } from "@/utils/common";
import { OperationHeader } from "./reward";

const columns: Column[] = [
  {
    dataIndex: "userId",
    title: "地址",
    width: px2vw(100),
    render: (record) => {
      return (
        <Text width={px2vw(100)} fontSize="12px">
          {formatAddress(record?.userId)}
        </Text>
      );
    },
  },
  {
    dataIndex: "nftGrowth",
    title: "NFT流水",
    width: px2vw(140),
  },
  {
    dataIndex: "lpAmount",
    title: "LP质押数量",
    width: px2vw(95),
  },
];

function Index() {
  const { data } = useUserStore();

  const tableData = data?.business?.userInfoEntities;

  return (
    <Flex flexDirection="column" px={px2vw(20)} alignItems="center">
      <OperationHeader route="/personal" title="直推详情" />
      <Box marginTop={px2vw(40)}>
        <FetchTemplate loading={false} empty={tableData?.length === 0}>
          <Table data={tableData} columns={columns} />
        </FetchTemplate>
      </Box>
    </Flex>
  );
}

export default Index;
