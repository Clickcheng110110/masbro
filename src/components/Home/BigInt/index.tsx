import {
  Flex,
  Image,
  Text,
  ImageProps,
  Box,
  MergeWithAs,
} from "@chakra-ui/react";
import React, { useState } from "react";

import bigInt from "@/assets/images/begInt.png";
import intIcon1 from "@/assets/images/int-icon-1.png";
import intIcon2 from "@/assets/images/int-icon-2.png";
import intBegger from "@/assets/images/int-begger.png";
import buttonBgYellowSm from "@/assets/images/button-bg-white-yellow.png";

import mint from "@/assets/images/mint.png";
import { motion } from "framer-motion";
import px2vw from "@/theme/utils/px2vw";
import { buttonHover } from "@/theme/utils/style";
import BaseButton from "@/components/BaseButton";
import { useConfigContext } from "@/context/ConfigContext";
import { useLottie } from "lottie-react";
import begAnimation from "@/assets/animation/beg-animation.json";

function Index() {
  const animationOptions = {
    animationData: begAnimation,
    loop: true,
  };

  const { View } = useLottie(animationOptions);

  const [isShowAnimation, setIsShowAnimation] = useState(false);
  const { address } = useConfigContext();

  return (
    <>
      <Flex
        marginTop="128px"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        w={{ base: "100%", md: "1224px" }}
      >
        <Image
          // display={{ base: "none", md: "block" }}
          w={{ base: px2vw(133), md: "287px" }}
          h={{ base: px2vw(44), md: "87px" }}
          objectFit="contain"
          src={bigInt}
        />
        <Flex
          position="relative"
          marginTop="63px"
          w="100%"
          justifyContent={{ base: "center", md: "space-between" }}
          alignItems="center"
        >
          <Box display={isShowAnimation ? "block" : "none"}>{View}</Box>
          {!isShowAnimation && (
            <>
              <Image
                display={{ base: "none", md: "block" }}
                w="120px"
                h="120px"
                src={intIcon1}
                marginRight="40px"
              />
              <Image
                w={{ base: px2vw(330), md: "375px" }}
                h={{ base: px2vw(197), md: "215px" }}
                src={intBegger}
              />
              <Image
                display={{ base: "none", md: "block" }}
                w="184px"
                h="128px"
                src={intIcon2}
              />
            </>
          )}

          {/* <Image w="184px" h="128px" src={intIcon3} /> */}
        </Flex>
      </Flex>

      {address ? (
        <Image
          _hover={buttonHover}
          onClick={() => {
            setIsShowAnimation(!isShowAnimation);
          }}
          marginTop="100px"
          marginBottom="53px"
          src={mint}
        />
      ) : (
        <BaseButton
          marginTop="100px"
          marginBottom="53px"
          width={{ base: px2vw(230), md: "230px" }}
        >
          Connect Wallet
        </BaseButton>
      )}

      <Text
        fontSize={{ base: "24px", md: "32px" }}
        lineHeight={{ base: "32px", md: "32px" }}
        fontWeight="400"
      >
        Rap the pac to mint
      </Text>
      <Text
        padding={{ base: "0 20px", md: "0" }}
        fontSize={{ base: "24px", md: "32px" }}
        lineHeight={{ base: "32px", md: "32px" }}
        fontWeight="400"
        textAlign="center"
      >
        10,000 lucky guys will be able to claim till{" "}
        <Text
          display="inline-block"
          color="#FFC300"
          fontSize={{ base: "24px", md: "32px" }}
          lineHeight={{ base: "32px", md: "32px" }}
          fontWeight="400"
        >
          18:23
        </Text>
      </Text>
      <Flex
        zIndex={10}
        marginTop={{ base: px2vw(40), md: "80px" }}
        w={{ base: "90%", md: "600px" }}
        h="168px"
        bg="#0C4C02"
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          flexDirection="column"
          w={{ base: "90%", md: "552px" }}
          h="120px"
          bg="#FFC300"
          justifyContent="center"
          alignItems="center"
        >
          <Text
            fontSize={{ base: "24px", md: "32px" }}
            lineHeight="32px"
            fontWeight="400"
            color="rgba(196, 49, 3, 0.6)"
          >
            Airdrop Allocation
          </Text>
          <Text
            marginTop="5px"
            fontSize={{ base: "32px", md: "40px" }}
            lineHeight="40px"
            fontWeight="400"
            color="rgba(196, 49, 3, 1)"
          >
            TBA
          </Text>
        </Flex>
      </Flex>
    </>
  );
}

export default Index;
