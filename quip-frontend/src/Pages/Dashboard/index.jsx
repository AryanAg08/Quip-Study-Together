import "./Dashboard.css";
import React, { useState, useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { SideBar } from "../../components/sidebar";
import { Image, ChakraProvider, Table, Thead, Tbody, Tr, Th, Td, TableContainer, Box } from '@chakra-ui/react';
import Card from "../../components/Card";
import BarChart from "../../components/Charts";
import { barChartDataDashboard, barChartOptionsDashboard } from "../../data/chart";
import { leaderboardDataDashboard } from "../../data/ranks";
import { MdRocketLaunch } from "react-icons/md";
import { IoCubeSharp } from "react-icons/io5";
import Goals from "../../components/goals";

export function DashboardPage() {
    const [leaderboardData, setLeaderboardData] = useState([]);

    useEffect(() => {
        setLeaderboardData(leaderboardDataDashboard);
    }, []);

    const DashboardCard = {
        height: '100%',
        width: '100%',
        bg: 'none',
    };
    const StudyTimeCard = {
        top: "10vh",
        left: "15vw",
        height: "50vh",
        width: "30vw",
        position: "absolute",
        bg: "#D4ECCD",
    };
    const StudyTimeChart = {
        bg: "#9BD68A",
    };
    const StreakCard = {
        top: "10vh",
        left: "80vw",
        height: "30vh",
        width: "14vw",
        position: "absolute",
        bg: "#F8EED4",
        border: "2px solid black",
    };
    const LeaderboardCard = {
        top: "10vh",
        left: "47.5vw",
        height: "70vh",
        width: "30vw",
        position: "absolute",
        bg: "#FAECFF",
    };
    const GoalsCard = {
        top: "65vh",
        left: "15vw",
        height: "70vh",
        width: "30vw",
        position: "absolute",
        bg: "#F8EED4",
        border: "2px solid black",
    };

    return (
        <>
            <Card position={DashboardCard}>
                <ChakraProvider>
                    <Navbar />
                </ChakraProvider>
                <SideBar />
                <Card position={StudyTimeCard}>
                    <Card position={StudyTimeChart}>
                        <BarChart
                            barChartOptions={barChartOptionsDashboard}
                            barChartData={barChartDataDashboard}
                        />
                    </Card>
                    <div className="Total-Study-time">
                        <span className="Total">Total Active Hours</span>
                        <p>
                            <span className="green-text">(+23%)</span> than last week
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
                        <div style={{ fontSize: "small", fontWeight: "normal", marginTop: "-4px" }}>so far</div>
                        <div style={{ fontSize: "large", fontWeight: "bold" }}>Keep it Up!</div>
                    </div>
                </Card>
                <Card position={LeaderboardCard}>
                    <ChakraProvider>
                        <span style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <div style={{ fontSize: "x-large", fontWeight: "bold" }}>LEADERBOARD</div>
                        </span>
                        {leaderboardData.length > 0 ? (
                            <Box height="calc(60vh)" overflowY="scroll" overflowX="scroll">
                                <TableContainer>
                                    <Table variant="simple">
                                        <Thead>
                                            <Tr>
                                                <Th>Rank</Th>
                                                <Th> </Th>
                                                <Th>Name</Th>
                                                <Th>Study hours</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {leaderboardData.map((user) => (
                                                <Tr key={user.rank}>
                                                    <Td>{user.rank}</Td>
                                                    <Td>
                                                        <Image
                                                            boxSize="4vh"
                                                            borderRadius="full"
                                                            src={user.avatar}
                                                            alt={`${user.name} avatar`}
                                                            mr={2}
                                                        />
                                                    </Td>
                                                    <Td>{user.name}</Td>
                                                    <Td>{user.points}</Td>
                                                </Tr>
                                            ))}
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        ) : (
                            <Box display="flex" justifyContent="center" alignItems="center" height="calc(60vh)">
                                Leaderboard not available currently
                            </Box>
                        )}
                    </ChakraProvider>
                </Card>
                <Card position={GoalsCard}>
                    <ChakraProvider>
                        <span style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <div style={{ fontSize: "x-large", fontWeight: "bold" }}>YOUR GOALS</div>
                        </span>
                        <Box height="calc(60vh)" overflowX="scroll">
                            <Goals />
                        </Box>
                    </ChakraProvider>
                </Card>
            </Card>
        </>
    );
}
