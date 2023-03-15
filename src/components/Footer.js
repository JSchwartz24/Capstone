import React from "react";
import {Box, Flex, HStack, VStack, Text, Heading} from "@chakra-ui/react";

import {Highlight, P} from './../styles/components';

import {ReactComponent as ReactLogo} from '.././img/Logo.svg';


const Footer = () => {
  return (
    <Box backgroundColor="black">
          <HStack
            spacing='10vw'
            padding={5}
            display='flex'
            justifyContent='center'
            alignItems='initial'
            color='white'
            sx={P}
          >
            <ReactLogo/>
            <VStack alignItems='flex-start'>
                <Text fontWeight='bold'>Doormat Navigation</Text>
                <Text>Home</Text>
                <Text>About</Text>
                <Text>Menu</Text>
                <Text>Reservations</Text>
                <Text>Order Online</Text>
                <Text>Login</Text>
            </VStack>
            <VStack alignItems='flex-start'>
                <Text fontWeight='bold'>Contact</Text>
                <Text>Address</Text>
                <Text>Phone Number</Text>
                <Text>Email</Text>
            </VStack>
            <VStack alignItems='flex-start'>
                <Text fontWeight='bold'>Social Media Links</Text>
                <Text>Address</Text>
                <Text>Phone Number</Text>
                <Text>Email</Text>
            </VStack>
          </HStack>
    </Box>
  );
};
export default Footer;