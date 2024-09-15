import React from 'react'
import {Menu, MenuButton, MenuList, Button, IconButton, Stack, Text } from '@chakra-ui/react';
import { Image, Box } from '@chakra-ui/react'
import "./landingNavbar.css";

export function Navbar () {
  {
    return (
          <div className="landingNavBar">
                <Button 
                  backgroundColor="#addhe6" 
                  variant="solid" 
                  border="2px" 
                  borderColor="black" 
                  height="6vh" 
                  fontWeight='semibold'
                >
                  Log In
                </Button>
                <Button 
                  backgroundColor="#addhe6" 
                  variant="solid" 
                  border="2px" 
                  borderColor="black" 
                  height="6vh" 
                  fontWeight='semibold'
                  mr={4}
                >
                  Sign Up
                </Button>
                <Image
                  src = '/src/assets/logo-black-nobg.png'
                  boxSize='17vh'
                  mr='78vw'
                >
                </Image>
                
            </div>
    )
  }
};