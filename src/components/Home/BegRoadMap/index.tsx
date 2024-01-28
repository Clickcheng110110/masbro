import React, { Component } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import title from "@/assets/images/BEG-ROADMAP.png";
import Card from "@/components/Card";

const card_1 = {
  title: "Phase 1",
  context: "MEME",
};

function Index() {
  return (
    <Flex w="1212px" h="573px">
      <Image
        zIndex={0}
        top="2439px"
        w="440px"
        h="87px"
        left="500px"
        src={title}
        alt="title"
      />
        <Card title={card_1.title} context={card_1.context}></Card>   {" "}
    </Flex>
  );
}

export default Index;
