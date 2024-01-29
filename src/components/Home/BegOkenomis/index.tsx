import React, { Component } from "react";
import { Flex, Image, Text, Box, SimpleGrid } from "@chakra-ui/react";
import title from "@/assets/images/BEG-OKENOMICS.png";
import BEG_1 from "@/assets/images/BEG-OK-1.png";
import BEG_2 from "@/assets/images/BEG-OK-2.png";

function Index() {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <Image
        zIndex={0}
        w="535x"
        h="70px"
        src={title}
        alt="title"
        marginTop="121px"
      />
      <Flex
        flexDirection="column"
        // justifyContent="center"
        alignItems="center"
        position="relative"
        h="792px"
        w="1989px"
      >
        <Image position="absolute" width="1989px" height="792px" marginTop="19px" src={BEG_2} />
        <Text
          marginTop="58px"
          color="#FFF"
          fontSize="32px"
          lineHeight="32px"
          fontWeight="400"
        >
          Beg Supply
        </Text>
        <Box
          marginTop="30px"
          w="808px"
          h="80px"
          flexShrink="0"
          background="#FFC300"
        >
          <Flex
            justifyContent="center"
            alignItems="center"
            flexDirection="column">
            <Text color="#C43103" fontSize="40px" fontWeight="400" lineHeight="80px">
              1,000,000,000,000
            </Text>
          </Flex>
        </Box>
        <Image
          zIndex={2}
          ignoreFallback
          position="absolute"
          width="142px"
          height="127px"
          top="50px"
          right="404px"
          src={BEG_1} />
        <Text marginTop="38px" color="#FFF" fontSize="32px" fontWeight="400">
          No Taxes, No Bullshit. It’s that simple.
        </Text>
        <SimpleGrid
          columns={3}
          w="1224px"
          h="122px"
          spacingX='24px'
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          marginTop="70px"
        >
          <Flex
            w="392px"
            h="122px"
            justifyContent="center"
            alignItems="center"
            flexDirection="column">
            <Text color="#FFC300" fontSize="80px" fontWeight="400" lineHeight='87px'>
              80%
            </Text>
            <Text color="#FFF" fontSize="32px" fontWeight="400" lineHeight='35px'>
              Far mint
            </Text>
          </Flex>
          <Flex
            w="392px"
            h="122px"
            justifyContent="center"
            alignItems="center"
            flexDirection="column">
            <Text color="#FFC300" fontSize="80px" fontWeight="400" lineHeight='87px'>
              10%
            </Text>
            <Text color="#FFF" fontSize="32px" fontWeight="400" lineHeight='35px'>
              Beg-swap
            </Text>
          </Flex>
          <Flex
            w="392px"
            h="122px"
            justifyContent="center"
            alignItems="center"
            flexDirection="column">
            <Text color="#FFC300" fontSize="80px" fontWeight="400" lineHeight='87px'>
              10%
            </Text>
            <Text color="#FFF" fontSize="32px" fontWeight="400" lineHeight='35px'>
              Reserve
            </Text>
          </Flex>
        </SimpleGrid >
      </Flex>
    </Flex>)
}

export default Index;
