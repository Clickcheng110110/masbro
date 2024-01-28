import React from "react";
import { Box,Text,Flex } from "@chakra-ui/react";

export interface Props {
  title?: string;
  context?:string
}

function Index({title,context}:Props) {
  return (
    <Box w='479px' h='154px' flex-shrink='0' opacity='0.1' background='#FFC300'>
      <Flex>
        <Text
          fontSize='24px'
          fontStyle='normal'
          lineHeight='normal'
          fontWeight='400'
          text-align='center'
          color='#FFF'
          fontFamily="VonwaonBitmap 16px"
        >
          {title}
        </Text>
      </Flex>
      
      <Text
        fontSize='40px'
        fontStyle='normal'
        lineHeight='normal'
        fontWeight='400'
        color='#FFC300'
        text-align='center'
        fontFamily="VonwaonBitmap 16px"
      >
        {context}
      </Text>
    </Box>
  );
}

export default React.memo(Index);
