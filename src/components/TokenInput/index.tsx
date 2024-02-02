import { Flex, Text, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import BaseInput, { BaseInputProps } from "../BaseInput";
import { Control, useController } from "react-hook-form";
import { formatInputValue, formatValue } from "@/utils/common";
import useDebounce from "@/hooks/useDebounce";
import { buttonHover } from "@/theme/utils/style";
import px2vw from "@/theme/utils/px2vw";

export interface TokenInputProps extends BaseInputProps {
  title: string;
  token: string;
  tokenName: string;
  name: string;
  balance: string;
  control: Control;
  isShowMax?: boolean;
}
function Index({
  title,
  token,
  tokenName,
  name,
  balance,
  control,
  isShowMax = false,
  ...otherProps
}: TokenInputProps) {
  const {
    field: { onChange, value },
  } = useController({
    control,
    name: name,
    defaultValue: "",
  });
  const [newValue, setNewValue] = useState<string>("");

  useEffect(() => {
    setNewValue(value as string);
  }, [value]);

  const handleFormChange = useDebounce((val: string) => {
    onChange(val);
  }, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = formatInputValue(e.target.value);
    if (Number(inputValue) > Number(balance)) {
      inputValue = balance;
    }
    setNewValue(inputValue);
    handleFormChange(inputValue);
  };

  const handleMax = () => {
    onChange?.(balance);
  };

  return (
    <Flex
      padding={{ base: px2vw(16), md: "24px" }}
      flexDirection="column"
      bg="rgba(255, 255, 255, 0.1)"
    >
      <Flex justifyContent="space-between">
        <Text fontSize="16px" color="rgba(255, 255, 255, 0.3)">
          {title}
        </Text>
        <Flex fontSize="16px" gap="12px">
          <Text color="rgba(255, 255, 255, 0.3)">
            My balance: {formatValue(balance)} {tokenName}
          </Text>
          {isShowMax && (
            <Text
              onClick={handleMax}
              _hover={buttonHover}
              color="rgba(255, 195, 0, 1)"
            >
              Max
            </Text>
          )}
        </Flex>
      </Flex>

      <Flex>
        <BaseInput
          value={newValue}
          onChange={handleChange}
          placeholder="0"
          color="rgba(255, 255, 255,1)"
          _placeholder={{ color: "rgba(255, 255, 255, 0.3)" }}
          fontSize={{ base: "24px", md: "40px" }}
          paddingRight="20px"
          {...otherProps}
        />
        <Flex gap={"12px"} alignItems="center" justifyContent="center">
          <Image
            w={{ base: "24px", md: "32px" }}
            h={{ base: "24px", md: "32px" }}
            src={token}
          />
          <Text
            fontSize={{ base: "24px", md: "32px" }}
            color="rgba(255, 255, 255, 1)"
          >
            {tokenName}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Index;
