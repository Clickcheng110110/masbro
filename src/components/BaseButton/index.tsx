import { useConfigContext } from "@/context/ConfigContext";
import px2vw from "@/theme/utils/px2vw";
import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";

import whiteButtonBg from "@/assets/images/white-button-bg.png";
import yellowButtonBg from "@/assets/images/yellow-button-bg.png";
import { useSwitchNetwork } from "wagmi";
import { supportChains } from "@/pages/_app";

export interface BaseButtonProps extends ButtonProps {
  needLogin?: boolean;
  colorType?: "yellow" | "white";
}

function Index({
  children,
  isDisabled,
  needLogin = false,
  colorType = "white",
  onClick,
  ...props
}: BaseButtonProps) {
  const { isConnected, connectors, isSupportChain, connect } =
    useConfigContext();
  const { switchNetwork } = useSwitchNetwork();

  // const [ConnectModal, connectModalStatus] = useModal(ConnectModalContent);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (needLogin) {
      if (!isConnected) {
        // connectModalStatus.onOpen();
        connect?.({
          connector: connectors?.[0],
        });
        return;
      }
      if (!isSupportChain) {
        switchNetwork?.(supportChains?.[0]?.id);
        location.reload();
        return;
      }
    }
    onClick?.(e);
  };
  return (
    <>
      <Button
        onClick={handleClick}
        isDisabled={isDisabled}
        colorScheme="black"
        w="full"
        // boxShadow="inset 0px 0px 12px 1px #FFE178"
        pos="relative"
        h={{ base: px2vw(40), lg: "40px" }}
        bgImage={
          colorType === "white" || !isConnected ? whiteButtonBg : yellowButtonBg
        }
        bgSize={{ base: "100% 100%", lg: "100% 100%" }}
        bgRepeat="no-repeat"
        // borderRadius={{ base: px2vw(20), lg: "20px" }}
        fontSize={{ base: px2vw(24), lg: "24px" }}
        fontWeight="400"
        color={
          colorType === "white" || !isConnected
            ? "black.100"
            : "rgba(196, 49, 3, 1)"
        }
        _loading={{
          bgImage:
            colorType === "white" || !isConnected
              ? whiteButtonBg
              : yellowButtonBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        // _hover={
        //   isDisabled
        //     ? {}
        //     : {
        //         color: "black.500",
        //         boxShadow: "inset 0px 0px 40px 1px #FFD644",
        //       }
        // }
        _disabled={{
          // bg: "blue.500",
          opacity: 0.6,
          cursor: "not-allowed",
        }}
        {...props}
      >
        {needLogin
          ? isConnected
            ? isSupportChain
              ? children
              : "Network Error"
            : "Connect Wallet"
          : children}
      </Button>
      {/* {ConnectModal} */}
    </>
  );
}
export default Index;
