import { Flex, Image, Text, ImageProps, Box } from "@chakra-ui/react";
import React from "react";

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
import mint from "@/assets/images/mint.png";

interface BlockChainProps extends ImageProps {
  icon: string;
}
const BlockChain = ({ icon, ...otherProps }: BlockChainProps) => {
  return <Image w="40px" h="40px" src={icon} {...otherProps} />;
};

function Index() {
  return (
    <>
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
          <Flex
            marginTop="-20px"
            marginLeft="90px"
            position="relative"
            w="300px"
          >
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
      <Image marginTop="60px" marginBottom="53px" src={mint} />
      <Text fontSize="32px" fontWeight="400">
        Rap the pac to mint
      </Text>
      <Flex>
        <Text fontSize="32px" fontWeight="400">
          10,000 lucky guys will be able to claim till{" "}
        </Text>
        <Text color="#FFC300" fontSize="32px" fontWeight="400">
          18:23
        </Text>
      </Flex>
      <Flex
        marginTop="80px"
        w="600px"
        h="168px"
        bg="#0C4C02"
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          flexDirection="column"
          w="552px"
          h="120px"
          bg="#FFC300"
          justifyContent="center"
          alignItems="center"
        >
          <Text
            fontSize="32px"
            lineHeight="32px"
            fontWeight="400"
            color="rgba(196, 49, 3, 0.6)"
          >
            Airdrop Allocation
          </Text>
          <Text
            marginTop="5px"
            fontSize="40px"
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
