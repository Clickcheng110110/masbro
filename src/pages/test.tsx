"use client";

import { Box, chakra } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLottie } from "lottie-react";
import begAnimation from "@/assets/animation/beg-animation.json";

const Index = () => {
  const options = {
    animationData: begAnimation,
    loop: true,
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default Index;
