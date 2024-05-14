import React, { Component } from "react";
import { Flex, Image, Text, Box, SimpleGrid, Wrap } from "@chakra-ui/react";
import title from "@/assets/images/BEG-OKENOMICS.png";
import BEG_1 from "@/assets/images/BEG-OK-1.png";
import BEG_2 from "@/assets/images/BEG-OK-2.png";
import BEG_MB from "@/assets/images/BEG-OK-mb.png";
import px2vw from "@/theme/utils/px2vw";

export interface Props {
  point?: string;
  context?: string;
}

function Card({ point, context }: Props) {
  return (
    <Flex
      w={{ base: px2vw(106), md: "232px" }}
      h={{ base: px2vw(51), md: "118px" }}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Text
        color="#FFC300"
        fontSize={{ base: "24px", md: "80px" }}
        fontWeight="400"
      >
        {point}
      </Text>
      <Text
        color="#FFF"
        fontSize={{ base: "16px", md: "32px" }}
        fontWeight="400"
        whiteSpace="nowrap"
      >
        {context}
      </Text>
    </Flex>
  );
}

function Index() {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <Box
        // width={{ base: px2vw(133), md: "280px" }}
        // height={{ base: px2vw(44), md: "87px" }}
        marginTop={{ base: px2vw(80), md: "94px" }}
        fontSize={{ base: "24px", md: "48px" }}
      >
        MASBROKENOMICS
      </Box>
      <Flex
        flexDirection="column"
        alignItems="center"
        position="relative"
        h={{ base: px2vw(400), md: "292px" }}
        w={{ base: px2vw(995), md: "1989px" }}
      >
        <Image
          display={{ base: "block", md: "none" }}
          position="absolute"
          width={{ base: "995px", md: "1989px" }}
          height={{ base: "396px", md: "792px" }}
          marginTop={{ base: "-67px", md: "19px" }}
          src={BEG_MB}
        />
        <Text
          marginTop={{ base: px2vw(24), md: "58px" }}
          color="#FFF"
          fontSize={{ base: "16px", md: "32px" }}
          lineHeight={{ base: px2vw(17), md: "32px" }}
          fontWeight="400"
        >
          Total Supply
        </Text>
        <Box
          marginTop={{ base: px2vw(12), md: "30px" }}
          w={{ base: px2vw(343), md: "808px" }}
          h={{ base: px2vw(46), md: "80px" }}
          flexShrink="0"
          background="#FFC300"
        >
          <Flex
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Text
              color="#C43103"
              fontSize={{ base: "24px", md: "40px" }}
              fontWeight="400"
              lineHeight={{ base: px2vw(46), md: "80px" }}
            >
              1,000,000,000
            </Text>
          </Flex>
        </Box>
        <Image
          display={{ base: "none", md: "block" }}
          zIndex={2}
          ignoreFallback
          position="absolute"
          width="142px"
          height="127px"
          top="50px"
          right="404px"
          src={BEG_1}
        />
        {/* <Text
          marginTop={{ base: px2vw(12), md: "38px" }}
          color="#FFF"
          fontSize={{ base: "16px", md: "32px" }}
          fontWeight="400"
        >
          No Points, No Taxes, No Bullshit. It’s that simple.
        </Text> */}
        {/* <SimpleGrid
          display={{ base: "none", md: "grid" }}
          columns={5}
          w="1224px"
          h="118px"
          spacingX='16px'
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          marginTop="70px"
        >
          <Card point={"70%"} context="Far mint"></Card>
          <Card point={"5%"} context="Initial liquidity"></Card>
          <Card point={"10%"} context="Marketing"></Card>
          <Card point={"5%"} context="Team"></Card>
          <Card point={"10%"} context="Reserve"></Card>
        </SimpleGrid  > */}
        {/* <Wrap
          display={{ base: "block", md: "none" }}
          w={px2vw(343)}
          h={px2vw(51)}
          spacingX="12px"
          spacingY="24px"
          justify="center"
          alignItems="center"
          flexDirection="column"
          marginTop="24px"
        >
          <Card point={"70%"} context="Far mint"></Card>
          <Card point={"5%"} context="Initial liquidity"></Card>
          <Card point={"10%"} context="Marketing"></Card>
          <Card point={"5%"} context="Team"></Card>
          <Card point={"10%"} context="Reserve"></Card>
        </Wrap> */}
      </Flex>
    </Flex>
  );
}

export default Index;
