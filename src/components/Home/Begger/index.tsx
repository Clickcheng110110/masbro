import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { Component, useState } from "react";
import bg1 from "@/assets/images/begger-bg-1.png";
import bg2 from "@/assets/images/begger-bg-2.png";
import bg3 from "@/assets/images/begger-bg-3.png";
import begger from "@/assets/images/begger.png";
import musicDisabled from "@/assets/images/music-disabled.png";
import music from "@/assets/images/music.png";
import { buttonHover } from "@/theme/utils/style";
import { motion } from "framer-motion";

interface TokenProps {
  name: string;
  delay?: number;
  [record: string]: any;
}

const MotionBox = motion(Box);

const Token = ({ name, delay = 0, ...otherProps }: TokenProps) => {
  return (
    <MotionBox
      position="relative"
      padding="2px 4px"
      bg="#fff"
      color="#000"
      fontSize="16px"
      lineHeight="16px"
      fontWeight="400"
      initial={{ translateY: 0 }}
      animate={{
        translateY: [0, -10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        delay: delay,
        // type: "spring",
      }}
      {...otherProps}
    >
      <Box position="absolute" right="0" bottom="0" w="2px" h="2px" bg="#000" />
      {name}
    </MotionBox>
  );
};

function Index() {
  const [isPlay, setIsPlay] = useState(true);

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      position="relative"
      w="1224px"
      h="525px"
    >
      <Image
        zIndex={9}
        position="absolute"
        top="24px"
        right="24px"
        width="52px"
        height="52px"
        onClick={() => setIsPlay(!isPlay)}
        src={isPlay ? music : musicDisabled}
        _hover={buttonHover}
      />

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
        gap="16px"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Flex gap="16px">
          <Token name="MANTA" delay={0.1}></Token>
          <Token name="LOG" delay={0.2}></Token>
          <Token name="BTC" delay={0.3}></Token>
          <Token name="ETH" delay={0.4}></Token>
          <Token name="ETH" delay={0.5}></Token>
        </Flex>
        <Flex gap="16px">
          <Token name="MANTA" delay={0.6}></Token>
          <Token name="LOG" delay={0.7}></Token>
          <Token name="BTC" delay={0.8}></Token>
          <Token name="ETH" delay={0.9}></Token>
        </Flex>
        <Flex gap="16px">
          <Token name="MANTA" delay={1}></Token>
          <Token name="LOG" delay={1.1}></Token>
          <Token name="BTC" delay={1.2}></Token>
        </Flex>
        <Flex gap="16px">
          <Token name="MANTA" delay={1.3}></Token>
          <Token name="LOG" delay={1.4}></Token>
        </Flex>
        <Flex gap="16px">
          <Token name="MANTA" delay={1.5}></Token>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Index;
