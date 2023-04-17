import React, { useEffect, useRef, useState } from "react";
import { Box, HStack } from "@chakra-ui/react";

import { Link } from "react-router-dom";

import {ReactComponent as ReactLogo} from '.././img/Logo.svg';

const tags = [
    {
        name: "Home",
        to: "/",
    },
    {
        name: "About",
        to: "/",
    },
    {
        name: "Menu",
        to: "/",
    },
    {
        name: "Reservation",
        to: "/booking",
    },
    {
        name: "Online Order",
        to: "/",
    },
    {
        name: "Log in",
        to: "/",
    },

]

const Nav = () => {
    /*********** For nav effect ***********/
    const prevPosition = useRef(window.scrollY);
    const[transform, setTransform] = useState(null);

    // useEffect(() => {
    //     const handleScroll = (e) => {
    //       const currentPosition = window.pageYOffset;

    //       if(prevPosition.current > currentPosition){
    //         setTransform("translateY(0)");
    //       }
    //       else{
    //         setTransform("translateY(-200px)");
    //       }
    //       prevPosition.current = currentPosition;
    //     }

    //     window.addEventListener('scroll', handleScroll);

    //     return () => window.removeEventListener('scroll', handleScroll);
    //   }, [])

      return (
        <Box
          position="fixed"
          top={0}
          left={0}
          right={0}
          transform={transform}
          transitionProperty="transform"
          transitionDuration=".4s"
          transitionTimingFunction="ease-in-out"
          backgroundColor="#edefee"
          boxShadow='md'

          style={{zIndex:2}}
        >
          <Box color="black" maxWidth="1280px" margin="0 auto">
            <HStack
              px={16}
              py={4}
              justifyContent="space-between"
              alignItems="center"
            >
              <nav>
                <HStack spacing={8}>
                    <ReactLogo/>
                </HStack>
              </nav>
              <nav>
                <HStack spacing={8}>
                    {tags.map(({name, to}) => (
                        <Link to={to} key={name}>
                        {name}
                        </Link>
                    ))}
                  {/* <a href="#projects" onClick={handleClick("projects")} style={{cursor:'pointer'}}>
                    Projects
                  </a>
                  <a href="#contactme" onClick={handleClick("contactme")} style={{cursor:'pointer'}}>
                    Contact Me
                  </a> */}
                </HStack>
              </nav>
            </HStack>
          </Box>
        </Box>
      );
};

export default Nav;