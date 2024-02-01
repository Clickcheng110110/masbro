import {
  Flex,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import BaseInput from "../BaseInput";
import BaseButton from "../BaseButton";
import { buttonHover } from "@/theme/utils/style";

import buttonBgWhiteSm from "@/assets/images/button-bg-white-sm.png";
import buttonBgYellowSm from "@/assets/images/button-bg-white-yellow.png";
import { getLocalStorage, setLocalStorage } from "@/utils/storage";
import { storages } from "@/utils/constans";
import { formatInputValue } from "@/utils/common";
import { IModalContentProps } from "@/hooks/useModal";

const defaultSlippages = ["0.1", "0.3", "1"];
const WARNING_VALUE = 10;

function Index({ onClose }: IModalContentProps) {
  const localSlippage = getLocalStorage(storages.SLIPPAGE_VALUE);

  const [slippage, setSlippage] = useState<string>(localSlippage);

  const isShowError = Number(slippage) && Number(slippage) > WARNING_VALUE;

  return (
    <Flex flexDirection="column">
      <Text marginBottom="24px" fontSize="26px" lineHeight="26px">
        Set slippage
      </Text>
      <Flex justifyContent="space-between">
        <Text fontSize="20px" fontWeight="400">
          Input
        </Text>
        <Stack direction="row" gap="16px">
          {defaultSlippages.map((item) => (
            <Text
              onClick={() => {
                setSlippage(item);
              }}
              key={item}
              fontSize="20px"
              fontWeight="400"
              color="white.30"
              _hover={buttonHover}
            >
              {item}%
            </Text>
          ))}
        </Stack>
      </Flex>
      <InputGroup
        marginTop="16px"
        padding="12px"
        fontSize="16px"
        bgColor="#2A2A2A"
        border={isShowError ? "1px solid #F00" : ""}
      >
        <BaseInput
          value={slippage}
          placeContent="Please input slippage"
          fontSize="16px"
          onChange={(e) => {
            const formatInput = formatInputValue(e.target.value);
            setSlippage(formatInput);
          }}
        />
        <InputRightElement marginTop="4px">
          <Text fontSize="40px" lineHeight="40px">
            %
          </Text>
        </InputRightElement>
      </InputGroup>
      {isShowError ? (
        <Text color="#F00" fontSize="20px" lineHeight="20px">
          Your transaction may be frontrun and result in an unfavourable trade
        </Text>
      ) : (
        <></>
      )}
      <Flex justifyContent="flex-end" gap="20px" marginTop="24px">
        <BaseButton
          colorType="white"
          width="128px"
          bgImage={buttonBgWhiteSm}
          onClick={() => {
            onClose?.();
          }}
        >
          Cancel
        </BaseButton>
        <BaseButton
          colorType="yellow"
          width="128px"
          isDisabled={!slippage}
          bgImage={buttonBgYellowSm}
          onClick={() => {
            setLocalStorage(storages.SLIPPAGE_VALUE, slippage);
            onClose?.();
          }}
        >
          Confirm
        </BaseButton>
      </Flex>
    </Flex>
  );
}

export default Index;
