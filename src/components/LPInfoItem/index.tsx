import React from "react";
import { Stack, StackProps, TextProps } from "@chakra-ui/react";
import Text from "@/components/Text";
import px2vw from "@/theme/utils/px2vw";

export interface IProps extends StackProps {
  label: string;
  value?: string;
  renderValue?: () => React.ReactNode;
  labelProps?: TextProps;
  valueProps?: TextProps;
}
function Index({
  label,
  value,
  labelProps,
  valueProps,
  renderValue,
  ...otherProps
}: IProps) {
  return (
    <Stack
      direction="row"
      spacing="20px"
      justifyContent="center"
      alignItems="center"
      {...otherProps}
    >
      <Text
        type="gradient"
        fontSize={{ base: px2vw(18), md: "24px" }}
        fontWeight="400"
        {...labelProps}
      >
        {label}
      </Text>
      {renderValue ? (
        renderValue()
      ) : (
        <Text
          fontSize={{ base: px2vw(18), md: "24px" }}
          fontWeight="600"
          {...valueProps}
        >
          {value}
        </Text>
      )}
    </Stack>
  );
}
export default Index;
