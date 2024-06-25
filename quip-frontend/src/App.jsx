import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { SideBar } from './components/sidebar'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <>
     <ChakraProvider>
            <Navbar />
        </ChakraProvider>
      <SideBar />

      <SideBar/>
    </>
  )
}

export default App
