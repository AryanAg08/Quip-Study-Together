import React from 'react'
import { Popover, PopoverTrigger, PopoverContent, PopoverBody, PopoverArrow, Button, IconButton, Stack } from '@chakra-ui/react';
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
                <Popover>
                  <PopoverTrigger>
                    <IconButton
                          icon={<SettingsIcon />}
                          isRound={true}
                          variant="ghost"
                          height="5vh"
                          aria-label="Settings"
                          border="2px solid black"
                          mr={4}
                      />
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                      <PopoverBody>
                      <Stack spacing={1}>
                        <Button variant="solid" height="5vh" width="100%" fontSize="medium">
                          Profile
                        </Button>  
                        <Button variant="solid" height="5vh" width="100%" fontSize="medium">
                          Edit Profile
                        </Button>  
                        <Button variant="solid" height="5vh" width="100%" fontSize="medium" textColor="red">
                          Reset account
                        </Button> 
                      </Stack> 
                      </PopoverBody>
                  </PopoverContent>
                </Popover>
                   
            </div>
      </div>
    )
  }
};