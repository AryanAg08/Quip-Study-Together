import React from 'react'
import {Menu,MenuButton, MenuList, MenuItem, MenuDivider, Button, IconButton, Stack } from '@chakra-ui/react';
import { BellIcon, SettingsIcon } from '@chakra-ui/icons';
import { Image, Box } from '@chakra-ui/react'
import "./navbar.css";

export function Navbar () {
  {
    return (
      <div className="container">
          <div className="NavBar">
                <Button backgroundColor="#99d288" variant="solid" border="2px" borderColor="black" height="6vh" fontWeight='semibold'>
                    Join a Study Room
                </Button>
                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label='Notifications'
                    icon={<BellIcon />}
                    variant='ghost'
                    height="5vh"
                    isRound={true}
                    border="2px solid black"
                    mr={6}
                  />
                  {/* <MenuList>
                    <MenuItem>Notification 1</MenuItem>
                    <MenuDivider />
                    <MenuItem>Notification 2</MenuItem>
                    <MenuDivider />
                    <MenuItem>Notification 3</MenuItem>
                  </MenuList> */}
                  <MenuList>
                    <Box boxSize='sm' display="flex" alignItems="center" marginLeft="30%">
                      <Image boxSize='40%' objectFit='cover' src="/src/assets/no_notif.png" alt='no notifications' />
                    </Box>
                    <text> No notifications </text>
                  </MenuList>
                </Menu>
                <Menu>
                  <MenuButton
                    as={IconButton}
                    icon={<SettingsIcon />}
                    isRound={true}
                    variant="ghost"
                    height="5vh"
                    aria-label="Settings"
                    border="2px solid black"
                    mr={4}
                  />
                  <MenuList>
                  <Stack spacing={1}>
                    <Button backgroundColor="transparent" variant="solid" height="5vh" width="100%" fontSize="medium">
                      Profile
                    </Button>  
                    <Button backgroundColor="transparent" variant="solid" height="5vh" width="100%" fontSize="medium">
                      Edit Profile
                    </Button>  
                    <Button backgroundColor="transparent" variant="solid" height="5vh" width="100%" fontSize="medium" textColor="red">
                      Reset account
                    </Button> 
                  </Stack> 
                  </MenuList>
                </Menu>
                   
            </div>
      </div>
    )
  }
};