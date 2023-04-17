import React, {useState, useReducer} from 'react'
import {Box, Heading, VStack, Text } from "@chakra-ui/react";
import {FormLabel, Input, Select } from "@chakra-ui/react";

import {Display, Sub, Lead} from './../styles/components';

export default function ConfirmedBoooking() {

    return(
        <Box
        justifyContent="center"
        alignItems="center"
        backgroundColor="green"
        color='white'
        >
            <VStack spacing={4} alignItems="center" bg="green" paddingLeft= '10vw' paddingRight= '10vw' paddingTop='30vh' paddingBottom='30vh'>
                <Heading sx={Display} color='yellow' noOfLines={1}>Booking Has Been Confirmed</Heading>
            </VStack>
        </Box>
    )
};