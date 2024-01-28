import React from "react";
import px2vw from "@/theme/utils/px2vw";
import { Flex, Stack, Text, Box } from "@chakra-ui/react";

function Footer() {
  return (
    <Box width="100%">
      {/* <Flex
        flexDirection="column"
        display={{ base: "flex", md: "flex" }}
        padding={px2vw(30)}
        justifyContent="space-between"
        maxWidth="1440px"
        margin="0 auto"
      >
        <Flex width="100%" justifyContent="space-between" alignItems="center">
          <Stack direction="row" spacing={px2vw(20)}>
            <Image
              src={twitter}
              width={px2vw(30)}
              onClick={() => window.open("https://twitter.com/AstrAstrol75591")}
            />
            <Image
              onClick={() => window.open("https://t.me/LSCNFT")}
              src={telegram}
              width={px2vw(30)}
            />
          </Stack>
        </Flex>
        <Text
          my={px2vw(30)}
          color="white.60"
          fontSize="14px"
          letterSpacing="2.24px"
        >
          lucky-star.fun 版权所有，保留一切权力。
        </Text>
      </Flex> */}
    </Box>
  );
}

export default Footer;
