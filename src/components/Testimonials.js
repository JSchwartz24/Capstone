import * as React from 'react'
import { Box, HStack, SimpleGrid, VStack, Heading, Image, Text, Card, CardBody} from "@chakra-ui/react";

import {Sub, cardTitle, P, Highlight, Display} from './../styles/components';

const people = [
    {
        rating: "5",
        name: "James",
        review: "Very good!",
        getImageSrc: () => require("./../img/james.jpg"),
    },
    {
        rating: "4",
        name: "Sonya",
        review: "Very good!",
        getImageSrc: () => require("./../img/sonya.jpg"),
    },
    {
        rating: "4",
        name: "Ruby",
        review: "Very good!",
        getImageSrc: () => require("./../img/ruby.jpg"),
    },
    {
        rating: "5",
        name: "Tommy",
        review: "Very good!",
        getImageSrc: () => require("./../img/tommy.jpg"),
    },
]

const Testimonials = () => {
    return(
        <Box
            bg='green'
            paddingTop='60px'
            paddingBottom='80px'
        >
            <VStack>
                <Heading sx={Sub}>Testimonials</Heading>
                <HStack>
                    {people.map(({rating, name, review, getImageSrc}) => (
                        <Card key={name} bg='white' color='black'>
                            <CardBody>
                                <Text sx={P} paddingBottom={3}>Rating: {rating}/5 </Text>
                                <HStack>
                                    <Image src ={getImageSrc()} alt={name} boxSize='100px' borderRadius='md'/>
                                    <Text sx={P} paddingLeft={3}>{name}</Text>
                                </HStack>
                                <Text sx={P} paddingTop={3}>Review: {review}</Text>
                            </CardBody>
                        </Card>
                    ))}
                </HStack>
            </VStack>
        </Box>
    )
}

export default Testimonials;