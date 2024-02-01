import React from "react";
import { checkText } from "@/utils/common";
import { Input, InputProps } from "@chakra-ui/react";

export interface BaseInputProps extends InputProps {
  valChange?: (val: string) => void;
  decimal?: number;
}

function Index({ value, valChange, decimal = 18, ...props }: BaseInputProps) {
  return (
    <Input
      variant="unstyled"
      value={value}
      color="rgba(255, 255, 255,1)"
      _placeholder={{ color: "rgba(255, 255, 255, 0.3)" }}
      fontSize="40px"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        valChange && valChange(checkText(e.target.value, decimal) as string);
      }}
      {...props}
    />
  );
}

export default React.memo(Index);
