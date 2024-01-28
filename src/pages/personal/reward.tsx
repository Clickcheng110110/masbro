import px2vw from "@/theme/utils/px2vw";
import { bsc, bscTestnet } from "viem/chains";
import { Flex, Stack, Image, Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Text from "@/components/Text";

import gradientArrow from "@/assets/images/gradientArrow.png";
import { useRouter } from "next/router";
import Table, { Column } from "@/components/Table";
import { rewardList } from "@/apis/v2";
import { useConfigContext } from "@/context/ConfigContext";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import FetchTemplate from "@/components/FetchTemplate";

import useUserStore from "@/stores/user";
import { isDev } from "@/utils/request";

export interface OperationHeaderProps {
  route: string;
  title: string;
  isPersonal?: boolean;
}

export const OperationHeader = ({
  route,
  title,
  isPersonal = true,
}: OperationHeaderProps) => {
  const router = useRouter();
  const { data } = useUserStore();

  useEffect(() => {
    if (!isPersonal) return;
    if (!data) {
      router.push("/personal");
    }
  }, [data]);

  return (
    <Flex
      marginTop="40px"
      position="relative"
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Image
        onClick={() => {
          router.push(route);
        }}
        position="absolute"
        left="30px"
        top="10px"
        width="14px"
        height="18px"
        src={gradientArrow}
      />
      <Text type="gradient" fontSize="24px">
        {title}
      </Text>
    </Flex>
  );
};

const columns: Column[] = [
  {
    dataIndex: "releaseTypeName",
    title: "发放类型",
    width: px2vw(90),
  },
  {
    dataIndex: "releaseAmount",
    title: "数量(LSC)",
    width: px2vw(90),
  },
  {
    dataIndex: "blockTime",
    title: "发放时间",
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
    ["rewardListStatus", address],
    async () => {
      const res = await handleGetRewardList();
      const formatRes = (res?.data || []).map((item: any) => {
        return {
          ...item,
          releaseAmount: `${item.releaseAmount} LSC`,
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
    const res = await rewardList({ address: address as `0x${string}` });
    return res;
  };

  return (
    <Flex flexDirection="column" px={px2vw(20)} alignItems="center">
      <OperationHeader route="/personal" title="奖励发放记录" />
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
