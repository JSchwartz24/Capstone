import React from 'react'
import { Box, Button, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";

import {Display, Sub, Lead} from './../styles/components';

import Food from './../img/food.jpg';

const Hero = () => (
    <Box
      justifyContent="center"
      alignItems="center"
      backgroundColor="#edefee"
      paddingBottom='80px'
      width="100%"
    >
        <HStack bg="green" spacing={6}>
          <VStack spacing={4} alignItems="left" backgroundColor="#495E57" paddingLeft= '15vw' paddingRight= '15vw' paddingTop='100px' paddingBottom='40px'>
            <Heading sx={Display} color='yellow' noOfLines={1}>Little Lemon</Heading>
            <Heading sx={Sub} color='white' noOfLines={1}>Chicago</Heading>
            <Text sx={Lead} color='white' width="25vw">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</Text>
            <Button bg="#F4CE14" color="black" width='12vw' size='lg'>Reserve a Table</Button>
         </VStack>
         <Image
            borderRadius="xl"
            src={Food}
            position="absolute"
            top={150}
            left="60vw"
            width={400}
            height= {475}
            objectFit='cover'
          />
        </HStack>
    </Box>
  );

export default Hero;