import React, { useEffect, useRef, useState } from "react";
import { Box, HStack } from "@chakra-ui/react";

import {ReactComponent as ReactLogo} from '.././img/Logo.svg';

const tags = [
    {
        name: "Home"
    },
    {
        name: "About"
    },
    {
        name: "Menu"
    },
    {
        name: "Reservation"
    },
    {
        name: "Online Order"
    },
    {
        name: "Log in"
    },

]

const Nav = () => {
    /*********** For nav effect ***********/
    const prevPosition = useRef(window.scrollY);
    const[transform, setTransform] = useState(null);

    useEffect(() => {
        const handleScroll = (e) => {
          const currentPosition = window.pageYOffset;

          if(prevPosition.current > currentPosition){
            setTransform("translateY(0)");
          }
          else{
            setTransform("translateY(-200px)");
          }
          prevPosition.current = currentPosition;
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
      }, [])

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

                  {/* {socials.map(({icon, url}) => (
                    <a
                      key = {url}
                      href = {url}
                      target = "_blank"
                      rel = "noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={icon} size="2x" key = {url}/>
                    </a>
                  ))} */}
                </HStack>
              </nav>
              <nav>
                <HStack spacing={8}>
                    {tags.map(({name}) => (
                        <a
                        target = "_blank"
                        rel = "noopener noreferrer"
                        >
                        {name}
                        </a>
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

        // <ul>
        //     <li>
        //         <a href="Home">Home</a>
        //     </li>
        //     <li>
        //         <a href="About">About</a>
        //     </li>
        //     <li>
        //         <a href="Menu">Menu</a>
        //     </li>
        //     <li>
        //         <a href="Reservations">Reservations</a>
        //     </li>
        //     <li>
        //         <a href="OnlineOrder">Online Order</a>
        //     </li>
        //     <li>
        //         <a href="LogIn">Log In</a>
        //     </li>
        // </ul>