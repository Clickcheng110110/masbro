import React, { useContext, useEffect } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Stack,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { buttonHover } from "@/theme/utils/style";
import useModal from "@/hooks/useModal";

import px2vw from "@/theme/utils/px2vw";
import { ConfigContext } from "@/context/ConfigContext";
import { formatAddress } from "@/utils/common";
import { useToggle } from "usehooks-ts";

import logo from "@/assets/images/logo.png";

import { useContractsContext } from "@/context/ContractsContext";
import { useQuery } from "@tanstack/react-query";
import { ethers } from "ethers";

export interface LinkItem {
  label: string;
  path: string;
  isLink: boolean;
  isDisabled: boolean;
  isNotShow?: boolean;
}

function Index() {
  const router = useRouter();
  const toast = useToast();
  const [isOpen, toggle] = useToggle(false);
  const { t } = useTranslation(["common"]);
  const { userBindContact } = useContractsContext();
  const { address, connector } = useContext(ConfigContext);

  const userbindsStatus = useQuery(
    ["userbinds", address, userBindContact?.address],
    async ({ queryKey }) => {
      if (!queryKey[1]) return 1;
      if (!queryKey[2]) return 1;
      const res = await getUserBinds(queryKey[1]);

      if (res === ethers.constants.AddressZero) {
        return null;
      }
      return res;
    },
    {
      enabled: !!address && !!userBindContact?.address,
    }
  );

  const getUserBinds = async (address: string) => {
    try {
      const res = await userBindContact?.userBinds(address);
      return res;
    } catch (error) {
      return 1;
    }
  };

  const links: LinkItem[] = [
    {
      label: "NFT交易市场",
      path: "/market",
      isLink: false,
      isDisabled: false,
    },
    {
      label: "NFT碎片合卡",
      path: "/synthesis",
      isLink: false,
      isDisabled: false,
    },
    {
      label: "我的NFT",
      path: "/myNFT",
      isLink: false,
      isDisabled: false,
    },

    {
      label: "LP质押",
      path: "/lp",
      isLink: false,
      isDisabled: false,
    },
  ];

  const handleLink = (item: LinkItem) => {
    if (item.isDisabled) {
      toast({
        position: "top",
        title: "Coming soon",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return;
    }
    if (item.isLink) {
      window.open(item.path, "newWindow");
    } else {
      router.push(item.path);
    }
  };

  const render = () => {
    return links.map((item) => {
      return (
        <Text
          height="27px"
          textStyle="normal"
          onClick={() => {
            handleLink(item);
          }}
          key={item.path}
          _hover={buttonHover}
          paddingBottom="3px"
          borderBottom={
            item?.path === router?.asPath ? "2px solid #ffffff" : "0"
          }
        >
          {item?.label}
        </Text>
      );
    });
  };

  return (
    <>
      <Box
        display={{ base: "none", md: "block" }}
        bgColor={"black.500"}
        zIndex={99}
        position="fixed"
        width="100%"
      >
        <Flex
          justify="space-between"
          alignItems="center"
          padding="20px"
          maxWidth={"1440px"}
          margin="0 auto"
        >
          <Flex justifyContent="center" alignItems="center" gap="12px">
            <Image
              onClick={() => {
                router.push("/");
              }}
              src={logo}
              width={{ base: px2vw(34), md: "36px" }}
            />
            <Text fontSize="24px">Bagger</Text>
          </Flex>

          <Stack direction="row" spacing="70px" alignItems="center">
            {render()}
          </Stack>
        </Flex>
      </Box>
      <Box
        display={{ base: "flex", md: "none" }}
        zIndex={99}
        position="fixed"
        width="100%"
        paddingTop={px2vw(24)}
        paddingLeft={px2vw(24)}
        paddingRight={px2vw(24)}
        backgroundColor={isOpen ? "#181D20" : "black.500"}
      ></Box>
    </>
  );
}
export default Index;
