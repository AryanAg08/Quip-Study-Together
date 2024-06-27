import "./dashboard.css";
import React from "react";
import { Navbar } from "../../components/Navbar";
import { SideBar } from "../../components/sidebar";
import { ChakraProvider } from '@chakra-ui/react'
export function DashboardPage() {

    return (
        <>
        <ChakraProvider>
         <Navbar/>
         </ChakraProvider>
         <SideBar/>
        </>
    )
}