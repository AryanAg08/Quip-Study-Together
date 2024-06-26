import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { SideBar } from './components/sidebar'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <>
     <ChakraProvider>
            <Navbar />
            <SideBar />
        </ChakraProvider>
      
    </>
  )
}

export default App
