import px2vw from "@/theme/utils/px2vw";
import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import Text from "@/components/Text";

import Table, { Column } from "@/components/Table";
import FetchTemplate from "@/components/FetchTemplate";

import useUserStore from "@/stores/user";

import { formatAddress } from "@/utils/common";
import { OperationHeader } from "./reward";
import dayjs from "dayjs";

const columns: Column[] = [
  {
    dataIndex: "checkTime",
    title: "日期",
    width: px2vw(100),
    render: (record) => {
      return (
        <Text width={px2vw(100)} fontSize="12px">
          {dayjs(record.checkTime).format("MM.DD")}
        </Text>
      );
    },
  },

  {
    dataIndex: "lpAmount",
    title: "LP质押数量",
    width: px2vw(125),
  },
  {
    dataIndex: "isSuccess",
    title: "达标",
    width: px2vw(100),
    render: (record) => {
      return (
        <Text width={px2vw(100)} fontSize="12px">
          {record.isSuccess ? "是" : "否"}
        </Text>
      );
    },
  },
];

function Index() {
  const { data } = useUserStore();
  const tableData = data?.business?.lpRecord;
  return (
    <Flex flexDirection="column" px={px2vw(20)} alignItems="center">
      <OperationHeader route="/personal" title="LP质押详情" />
      <Box marginTop={px2vw(40)}>
        <FetchTemplate loading={false} empty={tableData?.length === 0}>
          <Table data={tableData} columns={columns} />
        </FetchTemplate>
      </Box>
    </Flex>
  );
}

export default Index;
