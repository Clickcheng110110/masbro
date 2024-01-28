import { Box, SimpleGrid, Flex, Image } from "@chakra-ui/react";
import React, { Component } from "react";

import Text from "@/components/Text";
import px2vw from "@/theme/utils/px2vw";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

import userRemoveBind from "@/assets/images/userRemoveBind.svg";

import type { GetStaticProps } from "next";

type Props = {
  // Add custom props here
};

export const Item = ({
  label,
  imgSrc,
  link,
}: {
  label: string;
  imgSrc: string;
  link: string;
}) => {
  const router = useRouter();
  return (
    <Flex
      onClick={() => {
        router.push(link);
      }}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bgColor="rgba(187, 223, 241, 0.3)"
      borderRadius="12px"
      width={px2vw(135)}
      height={px2vw(80)}
    >
      <Image width={px2vw(28)} height={px2vw(28)} src={imgSrc}></Image>
      <Text fontSize="16px">{label}</Text>
    </Flex>
  );
};

function Index() {
  return (
    <Flex
      minH="65vh"
      flexDirection="column"
      alignItems="center"
      paddingX={px2vw(35)}
    >
      <Text fontSize="24px" type="gradient" paddingBottom={px2vw(30)}>
        管理中心
      </Text>
      <SimpleGrid
        width="100%"
        minChildWidth={{ base: px2vw(135), lg: "290px" }}
        spacing={{ base: px2vw(20), md: "40px" }}
      >
        <Item
          link="/manage/removeBind"
          imgSrc={userRemoveBind}
          label="用户解绑"
        />
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </SimpleGrid>
    </Flex>
  );
}
export default Index;

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "cn", ["common"])),
  },
});
