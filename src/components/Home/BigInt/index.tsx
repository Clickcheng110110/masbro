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
import { motion } from "framer-motion";
import { buttonHover } from "@/theme/utils/style";

interface BlockChainProps {
  icon: string;
  [key: string]: any;
}

const MotionImage = motion(Image);
const BlockChain = ({ icon, ...otherProps }: BlockChainProps) => {
  return <MotionImage w="40px" h="40px" src={icon} {...otherProps} />;
};

function Index() {
  const [isShowAnimation, setIsShowAnimation] = useState(false);

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
          {isShowAnimation ? (
            <Flex
              marginTop="-20px"
              marginLeft="90px"
              position="relative"
              w="300px"
            >
              <MotionImage
                zIndex={11}
                position="absolute"
                w="141px"
                h="111px"
                top="150px"
                initial={{
                  left: 150,
                }}
                animate={{
                  left: [0, 120, 40, 160, 200, 310, 260],
                }}
                transition={{
                  duration: 6,
                  delay: 0,
                }}
                src={intBegger}
              />
              <BlockChain
                position="absolute"
                top="80px"
                left="0"
                initial={{
                  top: 0,
                }}
                icon={zk}
                animate={{
                  top: 200,
                }}
                transition={{
                  duration: 1,
                  delay: 0,
                }}
              />

              <BlockChain
                position="absolute"
                top="0px"
                left="40px"
                initial={{
                  top: 0,
                }}
                animate={{
                  top: 200,
                }}
                transition={{
                  duration: 1,
                  delay: 2,
                }}
                icon={Starknet}
              />
              <BlockChain
                position="absolute"
                top="40px"
                left="120px"
                initial={{
                  top: 0,
                }}
                animate={{
                  top: 200,
                }}
                transition={{
                  duration: 1,
                  delay: 1,
                }}
                icon={Manta}
              />
              <BlockChain
                position="absolute"
                top="110px"
                left="160px"
                initial={{
                  top: 0,
                }}
                animate={{
                  top: 200,
                }}
                transition={{
                  duration: 1,
                  delay: 3,
                }}
                icon={linear}
              />
              <BlockChain
                position="absolute"
                top="15px"
                left="200px"
                initial={{
                  top: 0,
                }}
                animate={{
                  top: 200,
                }}
                transition={{
                  duration: 1,
                  delay: 4,
                }}
                icon={zkfair}
              />
              <BlockChain
                position="absolute"
                top="130px"
                left="260px"
                initial={{
                  top: 0,
                }}
                animate={{
                  top: 200,
                }}
                transition={{
                  duration: 1,
                  delay: 6,
                }}
                icon={blast}
              />
              <BlockChain
                position="absolute"
                top="70px"
                left="310px"
                initial={{
                  top: 0,
                }}
                animate={{
                  top: 200,
                }}
                transition={{
                  duration: 1,
                  delay: 5,
                }}
                icon={Scroll}
              />
            </Flex>
          ) : (
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
          )}

          {/* <Image w="184px" h="128px" src={intIcon3} /> */}
          {!isShowAnimation && (
            <Image
              w="236px"
              h="185px"
              marginLeft="120px"
              marginTop="-50px"
              src={intBegger}
            />
          )}
        </Flex>
      </Flex>
      <Image
        _hover={buttonHover}
        onClick={() => {
          setIsShowAnimation(!isShowAnimation);
        }}
        marginTop="100px"
        marginBottom="53px"
        src={mint}
      />
      <Text fontSize="32px" fontWeight="400">
        Rap the pac to mint
      </Text>
      <Flex>
        <Text fontSize="32px" fontWeight="400">
          10,000 lucky guys will be able to claim till
        </Text>
        &nbsp; &nbsp;
        <Text color="#FFC300" fontSize="32px" fontWeight="400">
          18:23
        </Text>
      </Flex>
      <Flex
        zIndex={10}
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
