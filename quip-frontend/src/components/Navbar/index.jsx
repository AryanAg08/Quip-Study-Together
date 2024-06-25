import React from 'react'
import { Button, IconButton } from '@chakra-ui/react';
import { BellIcon, SettingsIcon } from '@chakra-ui/icons';
import "./navbar.css";

export function Navbar () {
  {
    return (
      <div className="container">
          <div className="NavBar">
                <Button backgroundColor="#99d288" variant="solid" border="2px" borderColor="black" height="6vh" fontWeight='semibold'>
                    Join a Study Room
                </Button>
                <IconButton
                    icon={<BellIcon />}
                    isRound={true}
                    variant="ghost"
                    height="5vh"
                    aria-label="Notifications"
                    border="2px solid black"
                    mr={6}
                />
                
                <IconButton
                    icon={<SettingsIcon />}
                    isRound={true}
                    variant="ghost"
                    height="5vh"
                    aria-label="Settings"
                    border="2px solid black"
                    mr={4}
                /> 
            </div>
      </div>
    )
  }
};