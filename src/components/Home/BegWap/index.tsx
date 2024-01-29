import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { Component } from "react";

import begWap from "@/assets/images/begWap.png";
import wapBg from "@/assets/images/wap-bg.png";
import wapChange from "@/assets/images/wap-change.svg";
import TokenInput from "@/components/TokenInput";

import ETH from "@/assets/images/ETH.png";
import beggarToken from "@/assets/images/beggar-token.png";
import tokenSelect from "@/assets/images/tokenSelect.svg";

function Index() {
  return (
    <Flex
      width="100%"
      position="relative"
      flexDirection="column"
      //   justifyContent="center"
      alignItems="center"
      h="950px"
      w="1224px"
      marginTop="-10px"
    >
      <Image
        position="absolute"
        left="0"
        right="0"
        w="100%"
        h="100%"
        opacity="0.3"
        src={wapBg}
      />
      <Image width="280px" height="87px" marginTop="94px" src={begWap} />

      <Flex
        zIndex={10}
        width="808px"
        h="510px"
        marginTop="40px"
        padding="32px 48px"
        flexDirection="column"
        bg="#000"
        border="1px solid #FFF"
      >
        <Flex
          width="100%"
          marginBottom="24px"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text color="#FFF" fontSize="32px" lineHeight="32px" fontWeight="400">
            Swap
          </Text>
          <Flex gap="12px">
            <Text
              color="#FFF"
              fontSize="24px"
              lineHeight="24px"
              fontWeight="400"
            ></Text>
            <Image width="24px" height="24px" src={wapChange} />
          </Flex>
        </Flex>
        <TokenInput title="You pay" token={ETH} name="ETH" />
        <Box h="6px" position="relative">
          <Flex
            justifyContent="center"
            alignItems="center"
            position="absolute"
            left="calc(50% - 24px)"
            top="calc(50% - 24px)"
            transform="rotate(45deg)"
            width="48px"
            height="48px"
            bg="#000"
          >
            <Flex
              position="absolute"
              left="calc(50% - 18px)"
              top="calc(50% - 18px)"
              justifyContent="center"
              alignItems="center"
              //   transform="rotate(45deg)"
              width="36px"
              height="36px"
              bg="#191919"
            >
              <Image
                width="20px"
                height="12px"
                transform="rotate(-45deg)"
                src={tokenSelect}
              />
            </Flex>
          </Flex>
        </Box>
        <TokenInput title="You receive" token={beggarToken} name="Beggar" />
      </Flex>
      <Flex
        position="absolute"
        left="230px"
        top="244px"
        width="808px"
        h="510px"
        padding="32px 48px"
        flexDirection="column"
        border="1px solid #FFF"
      ></Flex>
    </Flex>
  );
}

export default Index;
