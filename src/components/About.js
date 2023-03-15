import React from 'react'
import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";

import {Display, Sub, Lead} from './../styles/components';

import PhotoA from './../img/PhotoA.jpg';
import PhotoB from './../img/PhotoB.jpg';

const Hero = () => (
    <Box
      justifyContent="center"
      alignItems="center"
      backgroundColor="#edefee"
      paddingBottom='80px'
    >
        <HStack spacing={6}>
          <VStack spacing={4} alignItems="left" paddingLeft= '15vw' paddingRight= '15vw' paddingTop='100px' paddingBottom='40px'>
            <Heading sx={Display} color='yellow' noOfLines={1}>Little Lemon</Heading>
            <Heading sx={Sub} color='black' noOfLines={1}>Chicago</Heading>
            <Text sx={Lead} color='black' width="35vw">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</Text>
         </VStack>
         <Image
            borderRadius="xl"
            src={PhotoA}
            position="relative"
            width={200}
            height= {235}
            objectFit='cover'
            boxShadow='sm'
          />
          <Image
            borderRadius="xl"
            src={PhotoB}
            position="absolute"
            bottom={430}
            left={800}
            width={200}
            height= {235}
            objectFit='cover'
            boxShadow='sm'
          />
        </HStack>
    </Box>
  );

export default Hero;