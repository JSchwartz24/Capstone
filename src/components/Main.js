import * as React from 'react'
import { Box } from "@chakra-ui/react";

import Hero from './Hero'
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';

function Main(){
    return(
        <>
        <Box
            bg="white"
        >
            <Hero/>
            <Highlights/>
            <Testimonials/>
            <About/>
        </Box>
        </>
    )
}

export default Main;