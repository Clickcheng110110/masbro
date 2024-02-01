import { Flex, Text, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import BaseInput, { BaseInputProps } from "../BaseInput";
import { Control, useController } from "react-hook-form";
import { formatInputValue } from "@/utils/common";
import { debounce } from "lodash";
import useDebounce from "@/hooks/useDebounce";

export interface TokenInputProps extends BaseInputProps {
  title: string;
  token: string;
  name: string;
  control: Control;
}
function Index({
  title,
  token,
  name,
  control,
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
    if (value) {
      setNewValue(value as string);
    }
  }, [value]);

  const handleFormChange = useDebounce((val: string) => {
    onChange(val);
  }, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = formatInputValue(e.target.value);
    setNewValue(inputValue);
    handleFormChange(inputValue);
  };

  return (
    <Flex padding="24px" flexDirection="column" bg="rgba(255, 255, 255, 0.1)">
      <Text fontSize="16px" color="rgba(255, 255, 255, 0.3)">
        {title}
      </Text>
      <Flex>
        <BaseInput
          value={newValue}
          onChange={handleChange}
          placeholder="0"
          color="rgba(255, 255, 255,1)"
          _placeholder={{ color: "rgba(255, 255, 255, 0.3)" }}
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
