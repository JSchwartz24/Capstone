import * as React from 'react'
import { Box, HStack, SimpleGrid, VStack } from "@chakra-ui/react";

// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';

import Hero from './Hero'
import Highlights from './Highlights';

import Salad from '.././img/greek_salad.jpg';
import Lemon from '.././img/lemon_dessert.jpg';
import Bruchetta from '.././img/bruchetta.svg';

function Main(){
    return(
        <>
        <Box
            bg="white"
        >
            <Hero/>

            <Highlights/>

            {/* <section id="highlights">
                <h1>This weeks specials!</h1>
                <button>Online Menu</button>
                <SimpleGrid spacing={16} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={Salad}/>
                        <Card.Body>
                            <Card.Title>Greek Salad</Card.Title>
                            <Card.Text>
                                The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={Bruchetta} height ="auto"/>
                        <Card.Body>
                            <Card.Title>Bruchetta</Card.Title>
                            <Card.Text>
                                Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={Lemon}/>
                        <Card.Body>
                            <Card.Title>Lemon</Card.Title>
                            <Card.Text>
                            This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </SimpleGrid>
            </section> */}
            <section id="testimonials">
                <h1>Testimonials</h1>
                <div>
                    <p>Rating</p>
                    <div>
                        <img></img>
                        <p>Name</p>
                    </div>
                    <p>Review</p>
                </div>
            </section>
            <section id="about">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            </section>
        </Box>
        </>
    )
}

export default Main;