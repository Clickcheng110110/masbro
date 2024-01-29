import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { Component } from "react";
import bg1 from "@/assets/images/begger-bg-1.png";
import bg2 from "@/assets/images/begger-bg-2.png";
import bg3 from "@/assets/images/begger-bg-3.png";
import begger from "@/assets/images/begger.png";

interface TokenProps {
  name: string;
}

const Token = ({ name }: TokenProps) => {
  return (
    <Box
      position="relative"
      padding="2px 4px"
      bg="#fff"
      color="#000"
      fontSize="16px"
      lineHeight="16px"
      fontWeight="400"
    >
      <Box position="absolute" right="0" bottom="0" w="2px" h="2px" bg="#000" />
      {name}
    </Box>
  );
};

function Index() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      position="relative"
      w="1224px"
      h="525px"
    >
      <Image
        ignoreFallback
        zIndex={0}
        position="absolute"
        top="0"
        w="100%"
        h="100%"
        src={bg1}
        alt="bg1"
      />
      <Image
        ignoreFallback
        zIndex={1}
        src={bg2}
        position="absolute"
        top="84px"
        left="44px"
        w="252px"
        h="226px"
      />
      <Image
        ignoreFallback
        zIndex={2}
        src={bg3}
        position="absolute"
        top="376px"
        right="-52px"
        w="166px"
        h="112px"
      />
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        left="calc(100% - 180ox)"
        top="132px"
        width="360px"
      >
        <Image w="360px" h="121px" objectFit="contain" src={begger} />

        <Text
          color="#FFC300"
          marginTop="12px"
          marginBottom="5px"
          fontSize="32px"
          lineHeight="32px"
          fontWeight="400"
        >
          Disregard All Else
        </Text>
        <Text
          color="#FFC300"
          fontSize="32px"
          lineHeight="32px"
          fontWeight="400"
        >
          Eat Points Save Pacman
        </Text>
      </Flex>
      <Flex
        marginTop="460px"
        gap="8px"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Flex gap="16px">
          <Token name="MANTA"></Token>
          <Token name="LOG"></Token>
          <Token name="BTC"></Token>
          <Token name="ETH"></Token>
          <Token name="ETH"></Token>
        </Flex>
        <Flex gap="16px">
          <Token name="MANTA"></Token>
          <Token name="LOG"></Token>
          <Token name="BTC"></Token>
          <Token name="ETH"></Token>
        </Flex>
        <Flex gap="16px">
          <Token name="MANTA"></Token>
          <Token name="LOG"></Token>
          <Token name="BTC"></Token>
        </Flex>
        <Flex gap="16px">
          <Token name="MANTA"></Token>
          <Token name="LOG"></Token>
        </Flex>
        <Flex gap="16px">
          <Token name="MANTA"></Token>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Index;
