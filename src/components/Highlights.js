import * as React from 'react'
import { Box, HStack, SimpleGrid, VStack, Button, Heading, Image, Text, Card, CardBody, CardFooter} from "@chakra-ui/react";

import {Sub, cardTitle, P, Highlight} from './../styles/components';

import { MdDeliveryDining } from "react-icons/md";

import Salad from '.././img/greek_salad.jpg';
import Lemon from '.././img/lemon_dessert.jpg';
import Bruchetta from '.././img/bruchetta.svg';

// const projects = [
//     {
//       title: "Greek Salad",
//       description:
//         "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
//       getImageSrc: () => require('.././img/greek_salad.jpg'),
//     },
//     {
//       title: "Bruchetta",
//       description:
//         "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
//       getImageSrc: () => require('.././img/bruchetta.svg'),
//     },
//     {
//       title: "Lemon Dessert",
//       description:
//         "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
//       getImageSrc: () => require('.././img/lemon_dessert.jpg'),
//     },
// ];

const Highlights = () => {
    return (
        <Box
        paddingTop='80px'
        justifyContent='center'
        paddingBottom='80px'
        >
            <VStack>
                <HStack spacing={400} paddingBottom={5}>
                    <Heading sx={Sub}>This weeks specials!</Heading>
                    <Button bg="#F4CE14" color="black" width='12vw' size='lg'>Online Menu</Button>
                </HStack>
                <SimpleGrid spacing={16} templateColumns='300px 300px 300px'>
                    <Card>
                        <Image borderRadius="lg" src={Salad}/>
                        <CardBody>
                            <HStack spacing={30}>
                                <Text sx={cardTitle}>Greek Salad</Text>
                                <Text sx={cardTitle} color="orange">$12.99</Text>
                            </HStack>

                            <Text sx={P} paddingTop={5}>
                                The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                            </Text>
                        </CardBody>
                        <CardFooter>
                            <HStack>
                                <Text sx={Highlight}>Order a Delivery </Text>
                                <Text sx={Highlight}><MdDeliveryDining/></Text>
                            </HStack>
                        </CardFooter>
                    </Card>
                    <Card>
                        <Image borderRadius="lg" src={Bruchetta}/>
                        <CardBody>
                            <HStack spacing={20}>
                                <Text sx={cardTitle}>Bruchetta</Text>
                                <Text sx={cardTitle} color="orange">$5.99</Text>
                            </HStack>
                            <Text sx={P} paddingTop={5}>
                                Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                            </Text>
                        </CardBody>
                        <CardFooter>
                            <HStack>
                                <Text sx={Highlight}>Order a Delivery </Text>
                                <Text sx={Highlight}><MdDeliveryDining/></Text>
                            </HStack>
                        </CardFooter>
                    </Card>
                    <Card>
                        <Image borderRadius="lg" width="300px" height="200px" oBjectFit="cover" src={Lemon}/>
                        <CardBody>
                            <HStack spacing={5}>
                                <Text sx={cardTitle} >Lemon Dessert</Text>
                                <Text sx={cardTitle} color="orange">$4.99</Text>
                            </HStack>
                            <Text sx={P} paddingTop={5}>
                                This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                            </Text>
                        </CardBody>
                        <CardFooter>
                            <HStack>
                                <Text sx={Highlight}>Order a Delivery </Text>
                                <Text sx={Highlight}><MdDeliveryDining/></Text>
                            </HStack>
                        </CardFooter>
                    </Card>
                </SimpleGrid>
            </VStack>
        </Box>
    );
  };

export default Highlights;