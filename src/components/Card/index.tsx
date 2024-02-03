import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import px2vw from "@/theme/utils/px2vw";

export interface Props {
  title?: string;
  context?: string;
}

function Index({ title, context }: Props) {
  return (
    <Flex alignItems="center">
      <Box
        w={{ base: px2vw(343), md: "479px" }}
        h={{ base: px2vw(70), md: "154px" }}
        flex-shrink="0"
        background="rgba(255, 195, 0, 0.1)"
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          w={{ base: px2vw(343), md: "479px" }}
          h={{ base: px2vw(70), md: "154px" }}
        >
          <Text
            fontSize={{ base: "16px", md: "24px" }}
            fontStyle="normal"
            lineHeight="normal"
            fontWeight="400"
            color="#FFF"
          >
            {title}
          </Text>

          <Text
            marginTop={{ base: "8px", md: "30px" }}
            fontSize={{ base: "24px", md: "40px" }}
            fontStyle="normal"
            lineHeight="normal"
            fontWeight="400"
            color="#FFC300"
          >
            {context}
          </Text>
        </Flex>
      </Box>
    </Flex>

  );
}

export default React.memo(Index);
