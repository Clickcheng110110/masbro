"use client";

import { Box, chakra } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Coin = ({ x, y, onCoinCollected }) => {
  const [isCollected, setIsCollected] = useState(false);

  const handleCoinCollected = () => {
    setIsCollected(true);
    onCoinCollected();
  };

  useEffect(() => {
    if (isCollected) {
      return;
    }

    const interval = setInterval(() => {
      if (y >= window.innerHeight - 20) {
        clearInterval(interval);
        handleCoinCollected();
      }
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [isCollected, y, handleCoinCollected]);

  return (
    !isCollected && (
      <Box
        w={8}
        h={8}
        bg="yellow.400"
        borderRadius="full"
        position="absolute"
        style={{ top: y, left: x }}
      />
    )
  );
};

const Plate = () => {
  const [x, setX] = useState(window.innerWidth / 2 - 24);

  const handleMouseMove = (event) => {
    setX(event.clientX - 24);
  };

  return (
    <Box
      w={48}
      h={4}
      bg="gray.300"
      borderRadius="full"
      position="absolute"
      style={{ left: x }}
      onMouseMove={handleMouseMove}
    />
  );
};

const CoinRain = () => {
  const [collectedCoins, setCollectedCoins] = useState(0);
  const [totalCoins] = useState(20);

  const handleCoinCollected = () => {
    setCollectedCoins((prevCoins) => prevCoins + 1);
  };

  useEffect(() => {
    if (collectedCoins === totalCoins) {
      alert("Congratulations! All coins collected!");
    }
  }, [collectedCoins, totalCoins]);

  return (
    <Box position="relative" h="100vh" overflow="hidden">
      <Plate />

      {Array(totalCoins)
        .fill()
        .map((_, index) => (
          <Coin
            key={index}
            x={Math.random() * (window?.innerWidth - 8)}
            y={-20 - index * 30}
            onCoinCollected={handleCoinCollected}
          />
        ))}
    </Box>
  );
};

const App = () => {
  return (
    <div>
      <CoinRain />
    </div>
  );
};

export default App;
