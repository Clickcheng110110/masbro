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
import { useQuery } from "@tanstack/react-query";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import { buttonHover } from "@/theme/utils/style";
import { useContractsContext } from "@/context/ContractsContext";
import px2vw from "@/theme/utils/px2vw";
import { useToggle } from "usehooks-ts";

import logo from "@/assets/images/logo.png";
import connectLogo from "@/assets/images/connect.png";
import { ConfigContext, useConfigContext } from "@/context/ConfigContext";
import BaseButton from "../BaseButton";
import { formatAddress } from "@/utils/common";
import { detectMetamask } from "@/utils/wallet";
import { useSwitchNetwork } from "wagmi";
import { supportChains } from "@/pages/_app";
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
  const { address, connectors, isSupportChain, connect } = useConfigContext();
  const { switchNetwork } = useSwitchNetwork();

  const links: LinkItem[] = [
    {
      label: "Twitter",
      path: "https://twitter.com/MasbroMemeCoin",
      isLink: true,
      isDisabled: false,
    },
    {
      label: "Swap",
      path: "https://quickswap.exchange/#/swap?swapIndex=2&currency1=0x92736C28A60Fc9D0cd46231962b73f4bd2359004",
      isLink: true,
      isDisabled: false,
    },
    {
      label: "Telegram",
      path: "https://t.me/masbromanta",
      isLink: true,
      isDisabled: false,
    },
    {
      label: "Dexscreener",
      path: "https://dexscreener.com/manta/0xd6d69586c079c0b453aabb4dfbe328db043e8c94",
      isLink: true,
      isDisabled: false,
    },
    // {
    //   label: "Doc",
    //   path: "/myNFT",
    //   isLink: false,
    //   isDisabled: false,
    // },
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
          fontSize={{ base: "16px", md: "24px" }}
          fontWeight="400"
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
        bgColor={"black.100"}
        zIndex={99}
        position="fixed"
        width="100%"
      >
        <Flex
          justify="space-between"
          alignItems="center"
          padding="20px  110px 20px 107px"
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
            <Text fontSize="24px">MASBRO</Text>
          </Flex>

          <Stack direction="row" spacing="40px" alignItems="center">
            {render()}
            <BaseButton needLogin colorType="yellow">
              {formatAddress(address)}
            </BaseButton>
          </Stack>
        </Flex>
      </Box>
      <Flex
        display={{ base: "flex", md: "none" }}
        flexDirection="column"
        bgColor={"black.100"}
        zIndex={99}
        position="fixed"
        width="100%"
        padding="20px 16px"
        gap={{ base: px2vw(30), md: "0px" }}
      >
        <Flex
          width="100%"
          justify="space-between"
          alignItems="center"
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
            <Text fontSize="24px">MASBRO</Text>
          </Flex>

          <Stack direction="row" spacing="40px" alignItems="center">
            {address ? (
              <BaseButton needLogin colorType="yellow">
                {formatAddress(address)}
              </BaseButton>
            ) : (
              <BaseButton
                onClick={() => {
                  const isInstallMetamask = detectMetamask();
                  if (!isInstallMetamask) {
                    window.open("https://metamask.io/download.html", "_blank");
                    return;
                  }
                  connect?.({
                    connector: connectors?.[0],
                  });
                }}
              >
                Connect Wallet
              </BaseButton>
            )}
          </Stack>
        </Flex>
        <Flex width="100%" justify="space-between" alignItems="center">
          {render()}
        </Flex>
      </Flex>
    </>
  );
}
export default Index;
