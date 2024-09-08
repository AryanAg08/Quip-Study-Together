import React from "react";
import { ChakraProvider, Box, Flex, Heading, Text, Image, VStack } from "@chakra-ui/react";
import { Navbar } from "../../components/Navbar";
import "./SecondLanding.css"; 

export function SecondLandingPage() {
    const goToTrial = () => {
        
    };

    return (
        <>
            <ChakraProvider>
                <Box height="100vh" width="100vw" bg="none">
                    {/* First Section */}
                    <Box width="100vw" bg="#FAECFF" height="70vh">
                        <Flex justifyContent="space-between" height="100%" px={40}>
                            <Box>
                                <Image
                                    src="/images/black-quip.png"
                                    alt="students"
                                    boxSize="70vh"
                                />
                            </Box>
                            <Box>
                                <Image
                                    src="/images/student_main.png"
                                    alt="students"
                                    boxSize="70vh"
                                />
                            </Box>
                        </Flex>
                    </Box>

                    {/* Second Section */}
                 

                    <Box width="100vw" bg="#F8EED4" py={20}>
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
                </Box>
            </ChakraProvider>
        </>
    );
}
