import React, { Component } from "react";
import { Box, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import title from "@/assets/images/BEG-ROADMAP.png";
import back from "@/assets/images/BG-RM-BG.png";
import Card from "@/components/Card";
import px2vw from "@/theme/utils/px2vw";

const card_1 = {
  title: "Phase 1",
  context: "MASBRO",
};
const card_2 = {
  title: "Phase 2",
  context: "NGOPI MASBRO",
};
const card_3 = {
  title: "Phase 3",
  context: "MASBRO is CULTURE",
};
const card_4 = {
  title: "Phase 4",
  context: "CHILL is HEAL",
};

function Index() {
  return (
    <Flex
      marginTop={{ base: px2vw(60), md: "0px" }}
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
        MASBROADMAP
      </Box>
      <Flex
        w={{ base: px2vw(540), md: "1212px" }}
        h={{ base: px2vw(300), md: "573px" }}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        position="relative"
        marginTop={{ base: px2vw(24), md: "-40px" }}
      >
        <Image
          display={{ base: "none", md: "block" }}
          position="absolute"
          left="0"
          right="0"
          w="100%"
          h="100%"
          opacity="0.7"
          src={back}
        />

        <SimpleGrid columns={{ base: 1, md: 2 }}>
          <Flex
            paddingRight={{ base: "none", md: "29px" }}
            paddingBottom={{ base: "13px", md: "26px" }}
            boxSize="border-box"
            borderRight={{ base: "none", md: "1px dotted rgb(80,80,80)" }}
            borderBottom={{ base: "none", md: "1px dotted rgb(80,80,80)" }}
          >
            <Card title={card_1.title} context={card_1.context}></Card>
          </Flex>
          <Flex
            paddingLeft={{ base: "none", md: "29px" }}
            paddingBottom={{ base: "13px", md: "26px" }}
            boxSize="border-box"
            borderBottom={{ base: "none", md: "1px dotted rgb(80,80,80)" }}
          >
            <Card title={card_2.title} context={card_2.context}></Card>
          </Flex>
          <Flex
            paddingRight={{ base: "none", md: "29px" }}
            paddingTop={{ base: "none", md: "26px" }}
            paddingBottom={{ base: "13px", md: "none" }}
            boxSize="border-box"
            borderRight={{ base: "none", md: "1px dotted rgb(80,80,80)" }}
          >
            <Card title={card_3.title} context={card_3.context}></Card>
          </Flex>

          <Flex
            paddingLeft={{ base: "none", md: "29px" }}
            paddingTop={{ base: "none", md: "26px" }}
            boxSize="border-box"
          >
            <Card title={card_4.title} context={card_4.context}></Card>
          </Flex>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}

export default Index;
