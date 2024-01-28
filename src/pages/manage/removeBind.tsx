import {
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { OperationHeader } from "../personal/reward";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Text from "@/components/Text";
import px2vw from "@/theme/utils/px2vw";

import type { GetStaticProps } from "next";
import BaseButton from "@/components/BaseButton";
import { useMutation } from "@tanstack/react-query";
import { CancelBindParams, cancelBind } from "@/apis/v2";
import { useConfig } from "@/context/ConfigContext";
import { useForm } from "react-hook-form";

import { toastSuccessConfig } from "@/components/NewHome";

type Props = {
  // Add custom props here
};

function Index() {
  const { address } = useConfig();
  const toast = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CancelBindParams>();

  const { mutateAsync, data, isLoading } = useMutation({
    mutationFn: async (data: CancelBindParams) => {
      const res = await cancelBind(data);

      return res;
    },
    // mutationKey: "othFeeAndPriceData",
    cacheTime: 0,
  });

  const onSubmit = async (data: CancelBindParams) => {
    try {
      if (!address) return;
      await mutateAsync({
        address,
        authCode: data.authCode,
        cancelAddress: data.cancelAddress,
      });
      toast({
        ...toastSuccessConfig,
        title: "解绑成功",
      });
      reset();
    } catch (error) {}
  };

  const validateAddress = (value: string) => {
    if (value !== address) {
      return "钱包地址错误";
    }
    return true;
  };

  const validateGoogleAuthCode = (value: string) => {
    if (value.length !== 6) {
      return "Google 授权码错误";
    }
    return true;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        minH="80vh"
        flexDirection="column"
        py={px2vw(0)}
        px={px2vw(0)}
        //   alignItems="center"
      >
        <OperationHeader route="/manage" title="用户解绑" isPersonal={false} />

        <Stack my={px2vw(40)} spacing={px2vw(40)} px={px2vw(40)}>
          <FormControl isInvalid={!!errors?.cancelAddress}>
            <Flex flexDirection="column">
              <Text type="gradient" fontSize="18px" mb={px2vw(5)}>
                钱包地址
              </Text>
              <Input
                {...register("cancelAddress", {
                  required: "钱包地址不能为空",
                  validate: validateAddress,
                })}
                borderRadius="23px"
                fontSize="24px"
                border="1px solid rgba(172, 143, 255, 0.20)"
                height={px2vw(70)}
                bgColor="black"
              />
            </Flex>
            {errors?.cancelAddress && (
              <FormErrorMessage>
                {errors?.cancelAddress?.message}
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={errors?.authCode as any}>
            <Flex flexDirection="column">
              <Text type="gradient" fontSize="18px" mb={px2vw(5)}>
                Google 授权码
              </Text>
              <Input
                {...register("authCode", {
                  required: "Google 授权码不能为空",
                  validate: validateGoogleAuthCode,
                })}
                borderRadius="23px"
                border="1px solid rgba(172, 143, 255, 0.20)"
                height={px2vw(50)}
                bgColor="black"
              />
            </Flex>
            {errors?.authCode && (
              <FormErrorMessage>{errors?.authCode?.message}</FormErrorMessage>
            )}
          </FormControl>
        </Stack>
        <BaseButton
          type="submit"
          isLoading={isLoading}
          marginTop={px2vw(40)}
          width={px2vw(206)}
          height={px2vw(46)}
          alignSelf="center"
          colorScheme="gold"
          color="black.100"
        >
          提交解绑
        </BaseButton>
      </Flex>
    </form>
  );
}

export default Index;

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "cn", ["common"])),
  },
});
