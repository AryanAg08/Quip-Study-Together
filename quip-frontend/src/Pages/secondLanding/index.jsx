import "./SecondLanding.css";
import React from "react";
import { Navbar } from "../../components/Navbar";
import { ChakraProvider } from '@chakra-ui/react'
export function SecondLandingPage() {

    return (
        <>
        <ChakraProvider>
            <Navbar/>
        </ChakraProvider>
        </>
    )
}
