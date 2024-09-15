import "./Landing.css";
import React from "react";
import { Navbar } from "../../components/landingNavbar";
import { ChakraProvider, Box, Heading, Text, Button, Image, Flex, position } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
export function LandingPage() {
    const navigate = useNavigate(); 

    const goToTrial = () => {
        navigate("/video"); 
    };
    const FeatureCard = {
        height: "60vh",
        width: "20vw",
        bg: "#ffd4d4"
    };
    
    return (
        <>
            <ChakraProvider>
                <Navbar></Navbar>
            <Box width="100vw" bg="none">
                    {/* First Section */}
                    <Box width="100vw" bg="#FFFFFF" height="90vh">
                        <Flex justifyContent="space-between" alignItems="center" height="100%" px={40}>
                            <Box>
                                <Heading fontSize='4xl' fontWeight={400}>
                                    Introducing Quip
                                    <br/>
                                </Heading>
                                <Heading mb={4} fontSize='6xl'>Goals, Progress, Collaboration</Heading>
                                <Heading fontSize='2xl' fontWeight={400}>
                                    Where learning meets teamwork
                                </Heading>
                                <Button 
                                    size='lg' 
                                    backgroundColor='#def2ff' 
                                    mt='24px' 
                                    border="2px" 
                                    borderColor="black"
                                >
                                    <Text color='black'>Get Started</Text>
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
                 

                    <Box width="100vw" bg="#FFFFFF" py={20} height="150vh" pb={40}>
                        <Flex justifyContent="center" alignItems="center" flexWrap="wrap" px={40} gap={10}>
                            {/* First Feature Box */}
                            <Card position={FeatureCard}>
                                <div className="feature-container">
                                    <span style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                        <Image
                                            boxSize='45%'
                                            
                                            src="/src/assets/goal.png"
                                            alt='img'
                                        />
                                    </span>
                                    <Heading fontSize='2xl' fontWeight={700}>
                                        <br/>Goal Setting
                                    </Heading>
                                    <div style={{ fontSize: "large", fontWeight: "normal", marginTop: "-4px" }}>
                                    <br/>Set academic goals, track progress, and receive notifications to stay on track with study objectives.
                                    </div>
                                </div>
                            </Card>
                            <Card position={FeatureCard}>
                                <div className="feature-container">
                                    <span style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                        <Image
                                            boxSize='45%'
                                            
                                            src="/src/assets/reward.png"
                                            alt='img'
                                        />
                                    </span>
                                    <Heading fontSize='2xl' fontWeight={700}>
                                        <br/>Reward System
                                    </Heading>
                                    <div style={{ fontSize: "large", fontWeight: "normal", marginTop: "-4px" }}>
                                    <br/>Earn badges, unlock achievements, and level up based on your performance
                                    </div>
                                </div>
                            </Card>
                            <Card position={FeatureCard}>
                                <div className="feature-container">
                                    <span style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                        <Image
                                            boxSize='45%'
                                            
                                            src="/src/assets/leaderboard.png"
                                            alt='img'
                                        />
                                    </span>
                                    <Heading fontSize='2xl' fontWeight={700}>
                                        <br/>Community Leaderboard
                                    </Heading>
                                    <div style={{ fontSize: "large", fontWeight: "normal", marginTop: "-4px" }}>
                                    <br/>Compete with others to get high ranks and win badges
                                    </div>
                                </div>
                            </Card>
                            <Card position={FeatureCard}>
                                <div className="feature-container">
                                    <span style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                        <Image
                                            boxSize='45%'
                                            
                                            src="/src/assets/groupstudy.png"
                                            alt='img'
                                        />
                                    </span>
                                    <Heading fontSize='2xl' fontWeight={700}>
                                        <br/>Group Study Rooms
                                    </Heading>
                                    <div style={{ fontSize: "large", fontWeight: "normal", marginTop: "-4px" }}>
                                    <br/>Customizable virtual spaces where you can collaborate in real-time, share resources, and communicate with peers.
                                    </div>
                                </div>
                            </Card>
                            <Card position={FeatureCard}>
                                <div className="feature-container">
                                    <span style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                        <Image
                                            boxSize='45%'
                                            
                                            src="/src/assets/timer.png"
                                            alt='img'
                                        />
                                    </span>
                                    <Heading fontSize='2xl' fontWeight={700}>
                                        <br/>Personal Timers
                                    </Heading>
                                    <div style={{ fontSize: "large", fontWeight: "normal", marginTop: "-4px" }}>
                                    <br/>Integrated timers to help you manage study sessions effectively and maintain focus.
                                    </div>
                                </div>
                            </Card>
                            <Card position={FeatureCard}>
                                <div className="feature-container">
                                    <span style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                        <Image
                                            boxSize='45%'
                                            
                                            src="/src/assets/knowmore.png"
                                            alt='img'
                                        />
                                    </span>
                                    <Heading fontSize='2xl' fontWeight={700}>
                                        <br/>Want to know more?
                                    </Heading>
                                    <div style={{ fontSize: "large", fontWeight: "normal", marginTop: "-4px" }}>
                                    <br/>Check this out: <br/>
                                    <a href="https://aryan-goyal.notion.site/Quip-Study-Together-57490b4922a04a95a86bc7f9c468373e" target="_blank">More about Quip</a>
                                    </div>
                                </div>
                            </Card>

                            
                        </Flex>
                    </Box>
                
                <Box height="100vh" width="100vw" bg="none">
                    <Box width="100vw" bg="#FAECFF" height="100vh">
                        <Flex justifyContent="space-between" alignItems="center" height="100%" px={40}>
                            <Box>
                                <Heading fontSize='7vh' mb={4}>Try it out!</Heading>
                                <Heading fontSize='2xl' fontWeight={400}>
                                    Feeling unsure? <br/> Try out a dummy study room before signing up<br/> 
                                </Heading>
                                <Button 
                                    size='lg' 
                                    backgroundColor='#e288c8' 
                                    mt='24px' 
                                    border='2px solid'
                                    onClick={goToTrial}
                                >
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
                                <Heading fontSize='7vh' mb={4}>Join Us!</Heading>
                                <Button 
                                    size='lg' 
                                    backgroundColor='#f2ac30' 
                                    border='2px solid black'
                                    mt='25px' 
                                    mr='30px'
                                >
                                    Sign Up
                                </Button>
                                <Button  size='lg' 
                                    backgroundColor='#f2ac30' 
                                    border='2px solid black'
                                    mt='25px'
                                >
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
