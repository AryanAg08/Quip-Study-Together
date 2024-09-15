import "./Landing.css";
import React from "react";
import { Navbar } from "../../components/landingNavbar";
import { ChakraProvider, Box, Heading, Text, Button, Image, Flex } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";

export function LandingPage() {
    const navigate = useNavigate(); 

    const goToTrial = () => {
        navigate("/video"); 
    };
    return (
        <>
            <ChakraProvider>
            <Box width="100vw" bg="none">
                    {/* First Section */}
                    <Box width="100vw" bg="#FFFFFF" height="100vh">
                        <Flex justifyContent="space-between" alignItems="center" height="100%" px={40}>
                            <Box>
                                <Heading mb={4} fontSize='6xl'>Goals, Progress, Collaboration</Heading>
                                <Heading fontSize='2xl' fontWeight={400}>
                                    Where learning meets teamwork
                                </Heading>
                                <Button size='lg' colorScheme='blue' mt='24px'>
                                    Get Started
                                </Button>
                            </Box>
                            <Box>
                                <Image
                                    src="/src/assets/mainPage.svg"
                                    alt="students"
                                    boxSize="180vh"
                                />
                            </Box>
                        </Flex>
                    </Box>

                    {/* Second Section */}
                 

                    <Box width="100vw" bg="#F8EED4" py={20} height="100vh" pb={40}>
                        <Flex justifyContent="center" alignItems="center" flexWrap="wrap" px={40} gap={10}>
                            {/* First Feature Box */}
                            <Box width="300px" textAlign="center" bg="#FAECFF" borderRadius="md" p={5}>
                                <Image src="" alt="Img 1" mb={4} />
                                <Heading as="h3" size="md" mb={2}>Feature 1</Heading>
                                <Text>Description</Text>
                            </Box>

                            {/* Second Feature Box */}
                            <Box width="300px" textAlign="center" bg="#FAECFF" borderRadius="md" p={5}>
                                <Image src="" alt="Img 2" mb={4} />
                                <Heading as="h3" size="md" mb={2}>Feature 2</Heading>
                                <Text>Description</Text>
                            </Box>

                            {/* Third Feature Box */}
                            <Box width="300px" textAlign="center" bg="#FAECFF" borderRadius="md" p={5}>
                                <Image src="" alt="Img 3" mb={4} />
                                <Heading as="h3" size="md" mb={2}>Feature 3</Heading>
                                <Text>Description</Text>
                            </Box>

                            {/* Fourth Feature Box */}
                            <Box width="300px" textAlign="center" bg="#FAECFF" borderRadius="md" p={5}>
                                <Image src="" alt="Img 4" mb={4} />
                                <Heading as="h3" size="md" mb={2}>Feature 4</Heading>
                                <Text>Description</Text>
                            </Box>

                            {/* Fifth Feature Box */}
                            <Box width="300px" textAlign="center" bg="#FAECFF" borderRadius="md" p={5}>
                                <Image src="" alt="img 5" mb={4} />
                                <Heading as="h3" size="md" mb={2}>Feature 5</Heading>
                                <Text>Description</Text>
                            </Box>

                            {/* Sixth Feature Box */}
                            <Box width="300px" textAlign="center" bg="#FAECFF" borderRadius="md" p={5}>
                                <Image src="" alt="img 6" mb={4} />
                                <Heading as="h3" size="md" mb={2}>Feature 6</Heading>
                                <Text>Description</Text>
                            </Box>
                        </Flex>
                    </Box>
                
                <Box height="100vh" width="100vw" bg="none">
                    <Box width="100vw" bg="#FAECFF" height="100vh">
                        <Flex justifyContent="space-between" alignItems="center" height="100%" px={40}>
                            <Box>
                                <Heading mb={4}>Try it out!</Heading>
                                <Heading fontSize='2xl' fontWeight={400}>
                                    Feeling unsure? <br/> Try out a dummy study room before signing up<br/> 
                                </Heading>
                                <Button size='lg' colorScheme='purple' mt='24px' onClick={goToTrial}>
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
                    <Box width="100vw" bg="#f8ece5" height="100vh">
                        <Flex justifyContent="space-between" alignItems="center" height="100%" px={40}>
                            <Box>
                                <Image
                                    src="/src/assets/signUpNow.svg"
                                    alt="sign up now"
                                    boxSize="90vh"
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
                </Box>
            </ChakraProvider>
        </>
    );
}
