import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

export interface Props {
  title?: string;
  context?: string;
}

function Index({ title, context }: Props) {
  return (
    <Flex alignItems="center">
      <Box
        w="479px"
        h="154px"
        flex-shrink="0"
        background="rgba(255, 195, 0, 0.1)"
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          w="479px"
          h="154px"
        >
          <Text
            fontSize="24px"
            fontStyle="normal"
            lineHeight="normal"
            fontWeight="400"
            color="#FFF"
          >
            {title}
          </Text>

          <Text
            marginTop="30px"
            fontSize="40px"
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
