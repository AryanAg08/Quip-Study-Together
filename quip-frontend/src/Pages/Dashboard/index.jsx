import "./dashboard.css";
import React from "react";
import { Navbar } from "../../components/Navbar";
import { SideBar } from "../../components/sidebar";
import { Image, ChakraProvider } from '@chakra-ui/react'
import Card from "../../components/Card";
import BarChart from "../../components/Charts";
import { barChartDataDashboard, barChartOptionsDashboard } from "../../data/chart";
import { MdRocketLaunch } from "react-icons/md";
import { IoCubeSharp } from "react-icons/io5";

export function DashboardPage() {
    const StudyTimeCard = {
        top: "-60px",
        left: "60%",
        height: "45vh",
        width: "30vw",
        bg: "#D4ECCD",
    }
    const StudyTimeChart = {
        bg: "#9BD68A"
    }
    const StreakCard = {
        top: "-40px",
        left: "60%",
        height: "28vh",
        width: "14vw",
        bg: "#F8EED4",
        border: "2px solid black"
    }
    return (
        <>
            <ChakraProvider>
                <Navbar />
            </ChakraProvider>
            <SideBar />
            <Card position={StudyTimeCard} >
                <Card position={StudyTimeChart} >
                    <BarChart
                        barChartOptions={barChartOptionsDashboard}
                        barChartData={barChartDataDashboard}
                    />

                </Card>
                <div className="Total-Study-time">
                    <span class="Total">Total Active Hours</span>
                    <p>
                        <span class="green-text">(+23%)</span> than last week
                    </p>
                     <div className="study-container">
                    <div className="Study-sessions">
                        <span className="icon-box">
                            <MdRocketLaunch />
                        </span>
                        <span style={{ fontWeight: "bold", marginRight: "4px" }}>32</span> Study Sessions
                    </div>
                    <div className="Study-rooms">
                        <span className="icon-box-room">
                            <IoCubeSharp />
                        </span>
                        <span style={{ fontWeight: "bold", marginRight: "4px" }}>32</span> Study Rooms joined
                    </div>
                </div>
                </div>
            </Card>
            <Card position={StreakCard}>
            <div className="streak-container">
                <span style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <Image 
                        boxSize='60%'
                        border='2px solid black'
                        borderRadius='50%'
                        src="/src/assets/streak.png" 
                        alt='streak'
                    />
                </span>
                <div style={{ fontSize: "large", fontWeight: "bold" }}>18 Days</div>
                <div style={{ fontSize: "small", fontWeight: "normal", marginTop: "-4px"}}>so far</div>
                <div style={{ fontSize: "large", fontWeight: "bold" }}>Keep it Up!</div>
            </div>
        </Card>
        </>
    )
}