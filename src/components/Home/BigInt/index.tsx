import { Flex, Image, ImageProps } from "@chakra-ui/react";
import React, { Component } from "react";

import bigInt from "@/assets/images/begInt.png";
import intIcon1 from "@/assets/images/int-icon-1.png";
import intIcon2 from "@/assets/images/int-icon-2.png";
import intIcon3 from "@/assets/images/int-icon-3.png";
import intBegger from "@/assets/images/int-begger.png";
import Manta from "@/assets/images/Manta.png";
import blast from "@/assets/images/blast.png";
import Scroll from "@/assets/images/Scroll.png";
import zk from "@/assets/images/zk.png";
import zkfair from "@/assets/images/zkfair.png";
import Starknet from "@/assets/images/Starknet.png";
import linear from "@/assets/images/linear.png";

interface BlockChainProps extends ImageProps {
  icon: string;
}
const BlockChain = ({ icon, ...otherProps }: BlockChainProps) => {
  return <Image w="40px" h="40px" src={icon} {...otherProps} />;
};

function Index() {
  return (
    <Flex
      marginTop="128px"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      w="1224px"
    >
      <Image w="287px" h="87px" objectFit="contain" src={bigInt} />
      <Flex
        position="relative"
        marginTop="150px"
        w="100%"
        justifyContent="flex-start"
      >
        <Image w="120px" h="120px" src={intIcon1} marginRight="40px" />
        <Image w="184px" h="128px" src={intIcon2} />

        <Image
          position="absolute"
          left="280px"
          top="-75px"
          width="84px"
          height="88px"
          src={intIcon3}
        />
        <Flex marginTop="-20px" marginLeft="90px" position="relative" w="300px">
          <BlockChain position="absolute" top="80px" left="0" icon={zk} />
          <BlockChain
            position="absolute"
            top="0px"
            left="40px"
            icon={Starknet}
          />
          <BlockChain
            position="absolute"
            top="40px"
            left="120px"
            icon={Manta}
          />
          <BlockChain
            position="absolute"
            top="110px"
            left="160px"
            icon={linear}
          />
          <BlockChain
            position="absolute"
            top="15px"
            left="200px"
            icon={zkfair}
          />
          <BlockChain
            position="absolute"
            top="130px"
            left="260px"
            icon={blast}
          />
          <BlockChain
            position="absolute"
            top="70px"
            left="310px"
            icon={Scroll}
          />
        </Flex>
        {/* <Image w="184px" h="128px" src={intIcon3} /> */}
        <Image
          w="236px"
          h="185px"
          marginLeft="120px"
          marginTop="-50px"
          src={intBegger}
        />
      </Flex>
    </Flex>
  );
}

export default Index;
