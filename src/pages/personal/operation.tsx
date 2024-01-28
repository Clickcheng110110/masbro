import BaseButton from "@/components/BaseButton";
import px2vw from "@/theme/utils/px2vw";
import { Box, Flex, Progress, Stack, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import panelBG1 from "@/assets/images/panelBG5.png";
import LPInfoItem from "@/components/LPInfoItem";
import Text from "@/components/Text";
import Table, { Column } from "@/components/Table";

import gradientArrow from "@/assets/images/gradientArrow.png";
import { useRouter } from "next/router";
import NormalTabs from "@/components/NormalTabs";
import useUserStore from "@/stores/user";
import dayjs from "dayjs";
import { formatValue } from "@/utils/common";
import BigNumber from "bignumber.js";
import { OperationHeader } from "./reward";
import FetchTemplate from "@/components/FetchTemplate";

export interface OperationHeaderProps {
  route: string;
  title: string;
}

const columns: Column[] = [
  {
    dataIndex: "checkTime",
    title: "日期",
    width: px2vw(40),
  },
  {
    dataIndex: "growth",
    title: "日流水(USDT)",
    width: px2vw(100),
  },
  // {
  //   dataIndex: "isSuccess",
  //   title: "达标",
  //   width: px2vw(40),
  // },
  {
    dataIndex: "releaseAmount",
    title: "奖励数量(LSC)",
    width: px2vw(120),
  },
];

const workColumns: Column[] = [
  {
    dataIndex: "checkTime",
    title: "日期",
    width: px2vw(40),
  },
  {
    dataIndex: "lpAmount",
    title: "LP数量",
    width: px2vw(100),
  },
  // {
  //   dataIndex: "isSuccess",
  //   title: "达标",
  //   width: px2vw(40),
  // },
];

export interface InfoProps {
  checkRecords: IRecord[];
  lpRecord: IRecord[];
  isActive: number;
  releaseAmount: string;
  unReleaseAmount: string;
  remainAmount: string;
  todayTarget: string;
  totalAmount: string;
  totalTarget: string;
  totalGrowth: string;
  unsettleGrowth: string;
  directPeople?: string;
  allPeople?: string;
  monthGrowth: string;
  monthTarget: string;
  lpDepositNum: string;
  lpDepositTarget: string;
}

export interface IRecord {
  checkTime: string;
  checkType: number;
  growth: string;
  id: number;
  isSuccess: number;
  lpAmount: string;
  releaseAmount: string;
  updateTime: string;
  user: string;
}

const Info = ({ data }: { data: InfoProps }) => {
  const formatTableData = (data?.checkRecords || []).map((item) => {
    return {
      ...item,
      checkTime: dayjs(item.checkTime).format("MM.DD"),
      isSuccess: item.isSuccess ? "是" : "否",
    };
  });

  const activeProgress = new BigNumber(data?.totalGrowth)
    .dividedBy(data?.totalTarget)
    .multipliedBy(100)
    .toNumber();

  const todayProgress = new BigNumber(data?.unsettleGrowth)
    .dividedBy(data?.todayTarget)
    .multipliedBy(100)
    .toNumber();

  return (
    <FetchTemplate
      loading={false}
      empty={!data}
      renderEmpty={() => {
        return (
          <Text py={px2vw(20)} textAlign="center">
            No Data
          </Text>
        );
      }}
    >
      <Flex
        marginTop={px2vw(28)}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          spacing={{ base: px2vw(20), md: "0" }}
          flexDirection={{ base: "column", md: "row" }}
          width={{ base: px2vw(330), md: "960px" }}
          justifyContent="space-between"
          alignItems={{ base: "center", md: "center" }}
          padding={{ base: px2vw(20), md: "25px 30px" }}
          boxShadow="0px 4px 40px rgba(6, 16, 43, 0.65)"
          bgImage={panelBG1}
          bgSize="100% 100%"
          bgRepeat="no-repeat"
        >
          <LPInfoItem
            width={{ base: "100%", md: "inherit" }}
            justifyContent={{ base: "space-between", md: "center" }}
            label="总量"
            value={data?.totalAmount || "0"}
          />
          <LPInfoItem
            width={{ base: "100%", md: "inherit" }}
            justifyContent={{ base: "space-between", md: "center" }}
            label="剩余总量"
            value={data?.remainAmount || "0"}
          />

          <LPInfoItem
            width={{ base: "100%", md: "inherit" }}
            justifyContent={{ base: "space-between", md: "center" }}
            label="已发数量"
            value={data?.releaseAmount || "0"}
          />
          <LPInfoItem
            width={{ base: "100%", md: "inherit" }}
            justifyContent={{ base: "space-between", md: "center" }}
            label="未发数量"
            value={data?.unReleaseAmount || "0"}
          />
        </Stack>
        <Stack width="100%" my={px2vw(20)}>
          <Flex
            color="purple.100"
            justifyContent="space-between"
            alignItems="center"
            px={px2vw(10)}
          >
            <Text fontSize="18px" type="gradient">
              激活流水
            </Text>
            <Text fontSize="14px" type="gradient">
              {activeProgress >= 100 ? "已达标" : `达标(${data?.totalTarget})`}
            </Text>
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
            value={activeProgress >= 100 ? 100 : activeProgress}
          />
        </Stack>

        <Stack width="100%" my={px2vw(20)}>
          <Flex
            color="purple.100"
            justifyContent="space-between"
            alignItems="center"
            px={px2vw(10)}
          >
            <Text fontSize="18px" type="gradient">
              今日流水
            </Text>
            <Text fontSize="14px" type="gradient">
              {todayProgress >= 100 ? "已完成" : `达标(${data?.todayTarget})`}
            </Text>
          </Flex>
          <Progress
            colorScheme="blue"
            borderRadius="23px"
            height="30px"
            hasStripe
            isAnimated
            bgColor="black.100"
            border="1px solid"
            borderColor="blue.500"
            value={todayProgress >= 100 ? 100 : todayProgress}
          />
        </Stack>

        <Table data={formatTableData || []} columns={columns}></Table>
      </Flex>
    </FetchTemplate>
  );
};

const WorkInfo = ({ data }: { data: InfoProps }) => {
  const formatTableData = (data?.lpRecord || []).map((item) => {
    return {
      ...item,
      checkTime: dayjs(item.checkTime).format("MM.DD"),
      isSuccess: item.isSuccess ? "是" : "否",
    };
  });

  const monthProgress = new BigNumber(data?.monthGrowth)
    .dividedBy(data?.monthTarget)
    .multipliedBy(100)
    .toNumber();

  const lpProgress = new BigNumber(data?.lpDepositNum)
    .dividedBy(data?.lpDepositTarget)
    .multipliedBy(100)
    .toNumber();

  return (
    <FetchTemplate
      loading={false}
      empty={!data}
      renderEmpty={() => {
        return (
          <Text py={px2vw(20)} textAlign="center">
            No Data
          </Text>
        );
      }}
    >
      <Flex
        marginTop={px2vw(28)}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          spacing={{ base: px2vw(20), md: "0" }}
          flexDirection={{ base: "column", md: "row" }}
          width={{ base: px2vw(330), md: "960px" }}
          justifyContent="space-between"
          alignItems={{ base: "center", md: "center" }}
          padding={{ base: px2vw(20), md: "25px 30px" }}
          boxShadow="0px 4px 40px rgba(6, 16, 43, 0.65)"
          bgImage={panelBG1}
          bgSize="100% 100%"
          bgRepeat="no-repeat"
        >
          <LPInfoItem
            width={{ base: "100%", md: "inherit" }}
            justifyContent={{ base: "space-between", md: "center" }}
            label="总流水"
            value={data?.totalGrowth || "0"}
          />
          <LPInfoItem
            width={{ base: "100%", md: "inherit" }}
            justifyContent={{ base: "space-between", md: "center" }}
            label="直推人数"
            value={data?.directPeople || "0"}
          />

          <LPInfoItem
            width={{ base: "100%", md: "inherit" }}
            justifyContent={{ base: "space-between", md: "center" }}
            label="总人数"
            value={data?.allPeople || "0"}
          />
        </Stack>
        <Stack width="100%" my={px2vw(20)}>
          <Flex
            color="purple.100"
            justifyContent="space-between"
            alignItems="center"
            px={px2vw(10)}
          >
            <Text fontSize="18px" type="gradient">
              月流水
            </Text>
            <Text fontSize="14px" type="gradient">
              {monthProgress >= 100 ? "已达标" : `达标(${data?.monthTarget})`}
            </Text>
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
            value={monthProgress >= 100 ? 100 : monthProgress}
          />
        </Stack>

        <Stack width="100%" my={px2vw(20)}>
          <Flex
            color="purple.100"
            justifyContent="space-between"
            alignItems="center"
            px={px2vw(10)}
          >
            <Text fontSize="18px" type="gradient">
              Lp质押达标天数
            </Text>
            <Text fontSize="14px" type="gradient">
              {lpProgress >= 100 ? "已完成" : `达标(${data?.lpDepositTarget})`}
            </Text>
          </Flex>
          <Progress
            colorScheme="blue"
            borderRadius="23px"
            height="30px"
            hasStripe
            isAnimated
            bgColor="black.100"
            border="1px solid"
            borderColor="blue.500"
            value={lpProgress >= 100 ? 100 : lpProgress}
          />
        </Stack>

        <Table data={formatTableData || []} columns={workColumns}></Table>
      </Flex>
    </FetchTemplate>
  );
};

function Index() {
  const router = useRouter();
  const { data, handleSignUserInfo } = useUserStore();

  const { presale, presalePoint, business } = data || {};

  return (
    <>
      <OperationHeader route="/personal" title="奖励中心" />
      <NormalTabs
        marginTop={px2vw(20)}
        px={px2vw(20)}
        tabProps={{
          px: px2vw(15),
          flex: 1,
        }}
        data={[
          {
            tabPanelProps: { padding: 0 },
            label: "运营奖励",
            content: <Info data={presale} />,
          },
          {
            tabPanelProps: { padding: 0 },
            label: "节点奖励",
            content: <Info data={presalePoint} />,
          },
          // {
          //   tabPanelProps: { padding: 0 },
          //   label: "业务奖励",
          //   content: <WorkInfo data={business} />,
          // },
        ]}
      />
    </>
  );
}

export default Index;
