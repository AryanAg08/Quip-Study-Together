import "./Landing.css";
import React from "react";
import { Navbar } from "../../components/landingNavbar";
import { ChakraProvider, Box, Heading, Text, Button, Image, Flex } from '@chakra-ui/react';

export function LandingPage() {
    return (
        <>
            <ChakraProvider>
                <Box height="100vh" width="100vw" bg="none">
                    <Box width="100vw" bg="#FAECFF" height="70vh">
                        <Flex justifyContent="space-between" alignItems="center" height="100%" px={40}>
                            <Box>
                                <Heading mb={4}>Try it out!</Heading>
                                <Heading fontSize='2xl'>
                                    Feeling unsure? <br/> Try out a dummy study room before signing up<br/> 
                                </Heading>
                                <Button size='lg' colorScheme='purple' mt='24px'>
                                    Trial Study Room
                                </Button>
                            </Box>
                            <Box>
                                <Image
                                    src="/src/assets/trialRoom.svg"
                                    alt="try out now"
                                    boxSize="70vh"
                                />
                            </Box>
                        </Flex>
                    </Box>
                    <Box width="100vw" bg="#f8ece5" height="70vh">
                        <Flex justifyContent="space-between" alignItems="center" height="100%" px={40}>
                            <Box>
                                <Image
                                    src="/src/assets/signUpNow.svg"
                                    alt="sign up now"
                                    boxSize="70vh"
                                />
                            </Box>
                            <Box mr={40}>
                                <Heading mb={4}>Join Us!</Heading>
                                <Button size='lg' colorScheme='pink' mt='25px' mr='30px'>
                                    Sign Up
                                </Button>
                                <Button size='lg' colorScheme='pink' mt='25px'>
                                    Log In
                                </Button>
                            </Box>
                        </Flex>
                    </Box>
                </Box>
            </ChakraProvider>
        </>
    );
}
