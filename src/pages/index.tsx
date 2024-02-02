import { Flex } from "@chakra-ui/react";
import BegWap from "@/components/Home/BegWap";
import BegOkenomis from "@/components/Home/BegOkenomis";
import Begger from "@/components/Home/Begger";
import BigInt from "@/components/Home/BigInt";
import BegRoadMap from "@/components/Home/BegRoadMap";
import { useIsClient } from "usehooks-ts";

export default function Home() {
  const isClient = useIsClient();

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      as="main"
    >
      <Begger />
      {isClient && <BigInt />}
      {isClient && <BegWap />}

      <BegRoadMap />
      <BegOkenomis />
    </Flex>
  );
}
