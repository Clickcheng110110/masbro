import { Box, Image } from "@chakra-ui/react";
import React, { useState, useRef, useEffect } from "react";
import musicDisabled from "@/assets/images/music-disabled.png";
import music from "@/assets/images/music.png";
import { buttonHover } from "@/theme/utils/style";

function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <Box>
      <audio ref={audioRef} loop={true} src="/music.mp3" />

      <Image
        display={{ base: "none", md: "block" }}
        zIndex={9}
        position="absolute"
        top="24px"
        right="24px"
        width="52px"
        height="52px"
        onClick={() => togglePlay()}
        src={isPlaying ? music : musicDisabled}
        _hover={buttonHover}
      />
    </Box>
  );
}

export default AudioPlayer;
