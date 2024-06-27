import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { SideBar } from './components/sidebar'
import { Navbar } from './components/Navbar'
import { Chart } from './components/checking-chart'
import { Dashboard } from './Pages/Dashboard'

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
