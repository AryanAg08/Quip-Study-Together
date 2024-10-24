import React, { useState } from 'react';
import { ChakraProvider, Box, Button, Input, FormControl, FormLabel, Heading, VStack, HStack, Text, useToast } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import { login } from '../../data/auth';

const MotionBox = motion(Box);
const MotionFormControl = motion(FormControl);
const MotionButton = motion(Button);

export const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();
  const navigate = useNavigate(); // Initialize navigation

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const creds = {
      email,
      password
    };

    try {
      let loginResponse = await login(creds);  // Assuming the login function takes creds as argument
      let result = await loginResponse;

      const token = result.data.token;
      const Id = result.data.user.Id;
      localStorage.setItem('token', token);
      localStorage.setItem('Id', Id);
      // Handle successful login
      toast({
        title: isLogin ? "Logged in successfully!" : "Signed up successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      
      console.log(result);

      // Navigate to the dashboard and pass loginResponse data
      navigate('/dashboard');
    } catch (error) {
      // Handle error during login
      toast({
        title: "An error occurred",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      console.error("Login error: ", error);
    }
  };

  return (
    <ChakraProvider>
      <Box
        position="relative"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        width="100vw"
        overflow="hidden"
        bgImage="url('https://static.vecteezy.com/system/resources/thumbnails/020/734/052/original/animated-studying-lo-fi-background-late-night-homework-2d-cartoon-character-animation-with-nighttime-cozy-bedroom-interior-on-background-4k-footage-with-alpha-channel-for-lofi-music-aesthetic-video.jpg')"
        bgSize="cover"
        bgPosition="center"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bg: "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(2px)",
          zIndex: 1,
        }}
      >
        <MotionBox
          p={8}
          width="100%"
          maxWidth="600px"
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
          bg="rgba(0, 0, 120, 0.2)"
          style={{ backdropFilter: 'blur(5px)' }}
          zIndex={2}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading mb={6} color="white" textAlign="center">{isLogin ? "Login" : "Sign Up"}</Heading>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              {!isLogin && (
                <MotionFormControl
                  id="name"
                  color="white"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <FormLabel>Name</FormLabel>
                  <Input type="text" />
                </MotionFormControl>
              )}
              <MotionFormControl
                id="email"
                color="white"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
              >
                <FormLabel>Email</FormLabel>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </MotionFormControl>
              <MotionFormControl
                id="password"
                color="white"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
              >
                <FormLabel>Password</FormLabel>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </MotionFormControl>
              <MotionButton
                type="submit"
                colorScheme="purple"
                width="full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isLogin ? "Login" : "Sign Up"}
              </MotionButton>
            </VStack>
          </form>
          <HStack justifyContent="center" mt={4}>
            <Text color="white">{isLogin ? "Don't have an account?" : "Already have an account?"}</Text>
            <Button variant="link" color="black" colorScheme="purple" onClick={toggleForm}>
              {isLogin ? "Sign Up" : "Login"}
            </Button>
          </HStack>
        </MotionBox>
      </Box>
    </ChakraProvider>
  );
};
