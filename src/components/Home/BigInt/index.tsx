import { Flex, Image, Text, Box, Progress } from "@chakra-ui/react";
import React, { useState } from "react";

import bigInt from "@/assets/images/begInt.png";
import intIcon2 from "@/assets/images/int-icon-2.png";
import intBegger from "@/assets/images/int-begger.png";
import buttonBgYellowSm from "@/assets/images/button-bg-white-yellow.png";

import px2vw from "@/theme/utils/px2vw";
import BaseButton from "@/components/BaseButton";
import { useConfigContext } from "@/context/ConfigContext";
import { useLottie } from "lottie-react";
import begAnimation from "@/assets/animation/beg-animation.json";
import { useQuery } from "@tanstack/react-query";
import { getEligible } from "@/apis";
import useTransaction from "@/hooks/useTransaction";
import { useContractsContext } from "@/context/ContractsContext";
import { formatValue, fromWei } from "@/utils/common";
import BigNumber from "bignumber.js";

const MINT_TOTAL = "700000000000";

function Index() {
  const animationOptions = {
    animationData: begAnimation,
    loop: true,
  };

  const { View } = useLottie(animationOptions);
  const { claimContract } = useContractsContext();
  const { config, address } = useConfigContext();
  const [isShowAnimation, setIsShowAnimation] = useState(false);

  const getEligibleStatus = useQuery({
    queryKey: ["getAmountOut", address],
    queryFn: async ({ queryKey }) => {
      if (!queryKey[1]) return null;
      const res: any = await getEligible(queryKey[1] as string);
      return res;
    },
    refetchOnMount: false,
  });

  const getMintInfo = async () => {
    try {
      const totalClaimed = await claimContract?.totalClaimed();

      const formatTotalClaimed = fromWei(totalClaimed?.toString() as string);
      return formatTotalClaimed;
    } catch (error) {
      console.log("error", error);
    }
  };

  // const getClaimedTotal = async () => {
  //   try {
  //     const totalClaimed = await claimContract?.totalClaimed();

  //     const formatTotalClaimed = fromWei(totalClaimed?.toString() as string);
  //     return formatTotalClaimed;
  //   } catch (error) {}
  // };

  const getClaimedAmountInfo = async () => {
    try {
      const claimedAmounts = await claimContract?.claimedAmounts(
        address as string
      );
      const formatClaimedAmounts = fromWei(
        claimedAmounts?.toString() as string
      );
      return formatClaimedAmounts;
    } catch (error) {}
  };

  const mintedInfoStatus = useQuery({
    queryKey: ["mintedInfoStatus", config?.claim],
    queryFn: async ({ queryKey }) => {
      if (!queryKey[1]) return null;
      const res: any = await getMintInfo();

      return res;
    },
    refetchOnMount: false,
  });

  const claimedAmountsStatus = useQuery({
    queryKey: ["claimedAmounts", config?.claim, address],
    queryFn: async ({ queryKey }) => {
      if (!queryKey[1] || !queryKey[2]) return null;
      const res: any = await getClaimedAmountInfo();

      return res;
    },
    refetchOnMount: false,
  });

  const claimTransaction = useTransaction(claimContract?.claim, {});

  const isEligible = getEligibleStatus?.data?.data?.signature;

  const isClaimed = new BigNumber(claimedAmountsStatus?.data).isGreaterThan(0);

  const handleMint = async () => {
    try {
      if (!isEligible) return;
      await claimTransaction.run(
        getEligibleStatus?.data?.data?.amount,
        getEligibleStatus?.data?.data?.signature
      );
      setIsShowAnimation(!isShowAnimation);
    } catch (error) {
      console.log("error", error);
    } finally {
      claimedAmountsStatus.refetch();
      mintedInfoStatus.refetch();
    }
  };

  const mintedValue = formatValue(mintedInfoStatus?.data?.toString());
  const mintedProgress = new BigNumber(mintedInfoStatus?.data?.toString())
    .dividedBy(MINT_TOTAL)
    .multipliedBy(100)
    .toNumber();

  return (
    <>
      <Flex
        marginTop="128px"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        w={{ base: "100%", md: "800px" }}
      >
        <Image
          // display={{ base: "none", md: "block" }}
          w={{ base: px2vw(133), md: "287px" }}
          h={{ base: px2vw(44), md: "87px" }}
          objectFit="contain"
          src={bigInt}
        />
        <Flex
          position="relative"
          marginTop="63px"
          w={{ base: "100%", md: "800px" }}
          justifyContent={{ base: "center", md: "space-between" }}
          alignItems="center"
        >
          <Box display={isShowAnimation ? "block" : "none"}>{View}</Box>
          {!isShowAnimation && (
            <>
              <Image
                display={{ base: "none", md: "block" }}
                w="184px"
                h="128px"
                src={intIcon2}
              />
              <Image
                w={{ base: px2vw(330), md: "375px" }}
                h={{ base: px2vw(197), md: "215px" }}
                src={intBegger}
              />
            </>
          )}

          {/* <Image w="184px" h="128px" src={intIcon3} /> */}
        </Flex>
      </Flex>

      <Text
        marginTop="48px"
        marginBottom="40px"
        maxW={{ base: "90%", md: "800px" }}
        fontSize={{ base: "24px", md: "32px" }}
        lineHeight={{ base: "32px", md: "32px" }}
        fontWeight="400"
        textAlign="center"
      >
        Rap the pac to mint, the first 2,000 guys will be able to mint $Beg
      </Text>
      <Progress
        colorScheme="yellow"
        value={mintedProgress}
        w={{ base: "90%", md: "800px" }}
        height="20px"
      />
      <Flex
        marginTop={{ base: "12px", md: "20px" }}
        marginBottom="24px"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
        fontSize={{ base: "16px", md: "24px" }}
        fontWeight="400"
        maxW={{ base: "90%", md: "800px" }}
      >
        <Text>Minted:{mintedValue} Beg</Text>
        <Text>Total:{formatValue(MINT_TOTAL)} Beg</Text>
      </Flex>

      {address ? (
        isEligible && !isClaimed ? (
          <BaseButton
            isLoading={
              claimTransaction.loading ||
              mintedInfoStatus?.isLoading ||
              claimedAmountsStatus?.isLoading
            }
            colorType="yellow"
            marginBottom="53px"
            bgImage={buttonBgYellowSm}
            width={{ base: px2vw(230), md: "240px" }}
            onClick={handleMint}
          >
            Mint
          </BaseButton>
        ) : (
          <BaseButton
            isLoading={
              claimTransaction.loading ||
              mintedInfoStatus?.isLoading ||
              claimedAmountsStatus?.isLoading
            }
            isDisabled
            marginBottom="53px"
            width={{ base: px2vw(230), md: "240px" }}
          >
            No Eligible
          </BaseButton>
        )
      ) : (
        <BaseButton
          marginBottom="53px"
          width={{ base: px2vw(230), md: "230px" }}
        >
          Connect Wallet
        </BaseButton>
      )}
      <Flex
        zIndex={10}
        marginTop={{ base: px2vw(40), md: "80px" }}
        w={{ base: "90%", md: "600px" }}
        h="168px"
        bg="#0C4C02"
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          flexDirection="column"
          w={{ base: "90%", md: "552px" }}
          h="120px"
          bg="#FFC300"
          justifyContent="center"
          alignItems="center"
        >
          <Text
            fontSize={{ base: "24px", md: "32px" }}
            lineHeight="32px"
            fontWeight="400"
            color="rgba(196, 49, 3, 0.6)"
          >
            Airdrop Allocation
          </Text>
          <Text
            marginTop="5px"
            fontSize={{ base: "32px", md: "40px" }}
            lineHeight="40px"
            fontWeight="400"
            color="rgba(196, 49, 3, 1)"
          >
            TBA
          </Text>
        </Flex>
      </Flex>
    </>
  );
}

export default Index;
