import React, { useEffect, useState } from "react";
import { Flex, Stack, Image, useToast } from "@chakra-ui/react";

import BigNumber from "bignumber.js";
import { useTranslation } from "next-i18next";
import BaseButton from "@/components/BaseButton";
import { IModalContentProps } from "@/hooks/useModal";
import { toWei } from "@/utils/common";
import Text from "@/components/Text";
import BaseInput from "@/components/BaseInput";

import switchUnactive from "@/assets/images/switch.svg";
import switchActive from "@/assets/images/switchActive.svg";
import inviteLogo from "@/assets/images/inviteLogo.png";
import { useContractsContext } from "@/context/ContractsContext";
import useTransaction from "@/hooks/useTransaction";
import { ethers } from "ethers";
import { toastSuccessConfig, toastWarningConfig } from "../NewHome";
import { useConfig } from "@/context/ConfigContext";

BigNumber.config({ EXPONENTIAL_AT: 99 });

export interface Data {
  address: string;
  userBind: any;
  refetch: () => Promise<void>;
}

export const TRANSFER_AMOUNT = "0.0001";

const InviteModalContent = ({ data, onClose }: IModalContentProps<Data>) => {
  const [value, setValue] = useState<string>("");
  const { config, balanceStatus } = useConfig();
  const [isDefault, setIsDefault] = useState(false);
  const toast = useToast();

  const { userBindContact } = useContractsContext();
  const { t } = useTranslation();
  const { loading, run } = useTransaction(userBindContact?.addBind, {
    wait: true,
  });

  const isAddress = ethers.utils.isAddress(value);
  const isDisabled = !isAddress;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // if (oldUserStatus?.data) return;
    setValue(e.target.value);
  };

  const handleConfirm = async (value: string) => {
    try {
      if (
        new BigNumber(balanceStatus?.data?.formatted || "0").lt(TRANSFER_AMOUNT)
      ) {
        toast({
          ...toastWarningConfig,
          title: "BNB余额不足",
        });
        return;
      }
      await run(value, {
        value: toWei(TRANSFER_AMOUNT)?.toString(),
      });

      await data?.refetch();
      onClose?.();
      toast({
        ...toastSuccessConfig,
        title: "绑定成功",
      });
    } catch (error) {}
  };

  const handleSwitch = () => {
    // if (oldUserStatus?.data) return;
    if (data?.address) return;
    setValue(isDefault ? "" : (config?.awardCenter as string));
    setIsDefault(!isDefault);
  };

  // console.log("router", router);
  useEffect(() => {
    if (!data?.address) return;
    setValue(data?.address || "");
  }, [data?.address]);

  return (
    <Stack
      spacing={{ base: "25px" }}
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Stack justifyContent="center" alignItems="center">
        <Image src={inviteLogo} width="46px" height="71px" />
      </Stack>
      <Text
        type="gradient"
        fontSize="24px"
        fontWeight="700"
        letterSpacing="2px"
      >
        输入推荐人地址
      </Text>
      <BaseInput
        value={value}
        onChange={handleChange}
        border="0"
        borderRadius="20px"
        height="70px"
        fontSize="20px"
        paddingLeft="12px"
        paddingRight="28px"
        bgColor="rgba(0, 0, 0, 0.30)"
        _placeholder={{
          color: "white.30",
        }}
        _focusVisible={{
          boxShadow: "0",
        }}
      />
      <Flex width="100%" justifyContent="center">
        <BaseButton
          needLogin
          isDisabled={isDisabled}
          isLoading={loading}
          onClick={() => {
            handleConfirm(value);
          }}
          width="205px"
          height="46px"
          colorScheme="gold"
          variant="solid"
          fontSize="18px"
          fontWeight="700"
          color="black.100"
          borderRadius="23px"
        >
          {t("Confirm")}
        </BaseButton>
      </Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
        direction="row"
        onClick={handleSwitch}
      >
        <Image
          height="24px"
          width="24px"
          src={isDefault ? switchActive : switchUnactive}
        />

        <Text marginLeft="20px" type="gradient" fontSize="16px">
          无推荐人，使用默认地址
        </Text>
      </Flex>
    </Stack>
  );
};

export default InviteModalContent;
