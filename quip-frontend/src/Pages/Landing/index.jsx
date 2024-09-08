import "./Landing.css";
import React from "react";
import { Navbar } from "../../components/Navbar";
import { ChakraProvider } from '@chakra-ui/react'
export function LandingPage() {

    return (
        <>
        <ChakraProvider>
            <Navbar/>
        </ChakraProvider>
        </>
    )
}