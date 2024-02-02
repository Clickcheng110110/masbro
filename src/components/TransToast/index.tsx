import {
  Flex,
  Image,
  Stack,
  Text,
  StackProps,
  FlexProps,
} from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";

import close from "@/assets/images/close.svg";
import errorWarning from "@/assets/images/errorWarning.svg";

import { ToastContentProps, ToastOptions } from "react-toastify";
import px2vw from "@/theme/utils/px2vw";
import { buttonHover } from "@/theme/utils/style";
import { useInterval } from "usehooks-ts";

import swapLoading from "@/assets/images/swap-loading.png";

export type IType = "success" | "error" | "loading";

export interface InfoBoxProps<T = any> extends Partial<ToastContentProps<T>> {
  data?: T;
  type?: IType;
  containerProps?: FlexProps;
}

export const toastOption: ToastOptions = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const containerStyle = {
  height: { base: px2vw(142), lg: "142px" },
  width: { base: px2vw(355), lg: "560px" },
  padding: { base: px2vw(20), lg: "20px" },
  justifyContent: "space-between",
  alignItems: "center",

  color: "white.100",
  bgImage: swapLoading,
  bgSize: "100% 100%",
};

const leftContainerStyle: StackProps = {
  direction: "row",
  spacing: { base: px2vw(15), lg: "15px" },
  alignItems: "center",
};

const closeButtonStyle = {
  height: { base: px2vw(40), lg: "40px" },
  width: { base: px2vw(40), lg: "40px" },
  ignoreFallback: true,
  _hover: buttonHover,
};

const Content = (props: InfoBoxProps) => {
  const title = useMemo(() => {
    switch (props.type) {
      case "success":
        return (
          <Text
            fontSize="26px"
            fontWeight="700"
            lineHeight="26px"
            color="#42FF00"
            // {...titleStyle}
          >
            {props?.data?.title || "Operation Successful"}
          </Text>
        );
      case "error":
        return (
          <Text
            fontSize="26px"
            fontWeight="700"
            lineHeight="26px"
            color="#F00"
            // {...titleStyle}
          >
            {props?.data?.title || "Operation Error"}
          </Text>
        );
      default:
        return (
          <Text
            fontSize="26px"
            fontWeight="700"
            lineHeight="26px"
            color="white.100"
          >
            {props?.data?.title || "Loading"}
          </Text>
        );
    }
  }, [props?.data?.title, props.type]);

  return (
    <Flex {...containerStyle} alignItems="center">
      <Stack direction="row" width="100%" {...leftContainerStyle}>
        <Stack width="100%" spacing={{ base: px2vw(10), lg: "10px" }}>
          <Flex justifyContent="space-between" alignItems="center" width="100%">
            {title}
            <Image
              onClick={props.closeToast}
              {...closeButtonStyle}
              src={close}
              alt=""
            />
          </Flex>

          <Text
            width="100%"
            fontSize="20px"
            lineHeight="20px"
            fontWeight="400"
            color="white.100"
          >
            {props?.data?.desc}
          </Text>
        </Stack>
      </Stack>
      {/* right */}

      {/* <Flex
        flexShrink={0}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
     
      </Flex> */}
    </Flex>
  );
};

function InfoBox({ type = "loading", data, ...otherProps }: InfoBoxProps) {
  const [time, setTime] = useState<number>(
    otherProps.toastProps?.autoClose || 0
  );
  useInterval(
    () => {
      setTime(time - 1000);
    },
    time >= 0 ? 1000 : null
  );

  useEffect(() => {
    if (!time) otherProps.closeToast && otherProps.closeToast();
  }, [otherProps, time]);

  return (
    <>
      {React.cloneElement(<Content />, {
        data,
        time,
        type,
        ...otherProps,
      })}
    </>
  );
}
export default InfoBox;
