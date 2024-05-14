import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { Component, useState } from "react";
import bg1 from "@/assets/images/begger-bg-1.png";
import bg2 from "@/assets/images/begger-bg-2.png";
import bg3 from "@/assets/images/begger-bg-3.png";
import begger from "@/assets/images/begger.png";
import pic1 from "@/assets/images/pic1.png";
import { buttonHover } from "@/theme/utils/style";
import { motion } from "framer-motion";
import px2vw from "@/theme/utils/px2vw";
import AudioPlayer from "@/components/AudioPlayer";

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
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      position="relative"
      w={{ base: "100%", md: "1224px" }}
      h={{ base: px2vw(360), md: "525px" }}
    >
      <AudioPlayer />

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
        display={{ base: "none", md: "block" }}
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
        display={{ base: "none", md: "block" }}
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
        left={{ base: `calc(50% - ${px2vw(180)})`, md: "calc(50% - 180px)" }}
        top="132px"
        w={{ base: "100%", md: "320px" }}
      >
        <Image
          position="absolute"
          top={{ base: "0px" }}
          left={{ base: "30px" }}
          opacity={0.4}
          // w={{ base: px2vw(180), md: "360px" }}
          // h={{ base: px2vw(75), md: "121px" }}
          objectFit="contain"
          src={pic1}
        />
        <Image
          position="absolute"
          top={{ base: "0px" }}
          left={{ base: "-280px" }}
          opacity={0.4}
          // w={{ base: px2vw(180), md: "360px" }}
          // h={{ base: px2vw(75), md: "121px" }}
          objectFit="contain"
          src={pic1}
        />
        <Image
          position="absolute"
          top={{ base: "0px" }}
          left={{ base: "330px" }}
          opacity={0.4}
          // w={{ base: px2vw(180), md: "360px" }}
          // h={{ base: px2vw(75), md: "121px" }}
          objectFit="contain"
          src={pic1}
        />
        <Text
          color="#FFC300"
          marginTop="12px"
          marginBottom="5px"
          fontSize={{ base: "20px", md: "32px" }}
          lineHeight={{ base: "20px", md: "32px" }}
          fontWeight="400"
        >
          MASBRO is US
        </Text>
        <Text
          color="#FFC300"
          fontSize={{ base: "20px", md: "32px" }}
          lineHeight={{ base: "20px", md: "32px" }}
          fontWeight="400"
        >
          NO MASBRO NO PARTY
        </Text>
        <Text
          zIndex={9}
          marginTop="30px"
          color="#ffffff"
          fontSize={{ base: "20px", md: "32px" }}
          lineHeight={{ base: "20px", md: "32px" }}
          fontWeight="400"
          whiteSpace={{ base: "normal", md: "nowrap" }}
        >
          CA: 0x92736c28a60fc9d0cd46231962b73f4bd2359004
        </Text>
      </Flex>

      <Flex
        marginTop={{ base: px2vw(370), md: "260px" }}
        gap="16px"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Flex gap="16px" display={{ base: "none", md: "flex" }}>
          <Token name="MASBRO" delay={0.1}></Token>
          <Token name="MASBRO" delay={0.2}></Token>
          <Token name="MASBRO" delay={0.3}></Token>
          <Token name="MASBRO" delay={0.4}></Token>
          <Token name="MASBRO" delay={0.5}></Token>
        </Flex>
        <Flex gap="16px">
          <Token name="MASBRO" delay={0.6}></Token>
          <Token name="MASBRO" delay={0.7}></Token>
          <Token name="MASBRO" delay={0.8}></Token>
          <Token name="MASBRO" delay={0.9}></Token>
        </Flex>
        <Flex gap="16px">
          <Token name="MASBRO" delay={1}></Token>
          <Token name="MASBRO" delay={1.1}></Token>
          <Token name="MASBRO" delay={1.2}></Token>
        </Flex>
        <Flex gap="16px">
          <Token name="MASBRO" delay={1.3}></Token>
          <Token name="MASBRO" delay={1.4}></Token>
        </Flex>
        <Flex gap="16px">
          <Token name="MASBRO" delay={1.5}></Token>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Index;
