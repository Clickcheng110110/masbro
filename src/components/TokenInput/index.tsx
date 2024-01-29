import { Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import BaseInput, { BaseInputProps } from "../BaseInput";

export interface TokenInputProps extends BaseInputProps {
  title: string;
  token: string;
  name: string;
}
function Index({ title, token, name, ...otherProps }: TokenInputProps) {
  return (
    <Flex padding="24px" flexDirection="column" bg="rgba(255, 255, 255, 0.1)">
      <Text fontSize="16px" color="rgba(255, 255, 255, 0.3)">
        {title}
      </Text>
      <Flex>
        <BaseInput
          placeholder="0"
          color="rgba(255, 255, 255, 0.3)"
          fontSize="40px"
          {...otherProps}
        />
        <Flex gap="12px" alignItems="center" justifyContent="center">
          <Image w="32px" h="32px" src={token} />
          <Text fontSize="32px" color="rgba(255, 255, 255, 1)">
            {name}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Index;
