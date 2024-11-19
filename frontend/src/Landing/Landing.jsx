import "./Landing.css";
import React from "react";
// import { Navbar } from "../../components/landingNavbar";
import { useNavigate } from "react-router-dom";
import Card from "../components/cards/cards";

export function LandingPage() {
    const navigate = useNavigate();

    const goToTrial = () => {
        navigate("/video");
    };

    const FeatureCard = {
        height: "60vh",
        width: "20vw",
        backgroundColor: "#ffd4d4",
    };

    return (
        <>
            {/* <Navbar /> */}
            <div className="landing-container">
                {/* First Section */}
                <div className="section first-section">
                    <div className="section-left">
                        <h1 className="main-heading">Introducing Quip</h1>
                        <h2 className="sub-heading">Goals, Progress, Collaboration</h2>
                        <p className="description">Where learning meets teamwork</p>
                        <button className="start-button">
                            <span>Get Started</span>
                        </button>
                    </div>
                    <div className="section-right">
                        <img
                            src="/src/assets/mainPage.svg"
                            alt="students"
                            className="image"
                        />
                    </div>
                </div>

                {/* Second Section */}
                <div className="section second-section">
                    <div className="feature-container">
                        <Card position={FeatureCard}>
                            <div className="feature">
                                <div className="feature-image">
                                    <img src="/src/assets/goal.png" alt="Goal" />
                                </div>
                                <h3>Goal Setting</h3>
                                <p>Set academic goals, track progress, and receive notifications to stay on track with study objectives.</p>
                            </div>
                        </Card>
                        <Card position={FeatureCard}>
                            <div className="feature">
                                <div className="feature-image">
                                    <img src="/src/assets/reward.png" alt="Reward" />
                                </div>
                                <h3>Reward System</h3>
                                <p>Earn badges, unlock achievements, and level up based on your performance.</p>
                            </div>
                        </Card>
                        <Card position={FeatureCard}>
                            <div className="feature">
                                <div className="feature-image">
                                    <img src="/src/assets/leaderboard.png" alt="Leaderboard" />
                                </div>
                                <h3>Community Leaderboard</h3>
                                <p>Compete with others to get high ranks and win badges.</p>
                            </div>
                        </Card>
                        <Card position={FeatureCard}>
                            <div className="feature">
                                <div className="feature-image">
                                    <img src="/src/assets/groupstudy.png" alt="Group Study" />
                                </div>
                                <h3>Group Study Rooms</h3>
                                <p>Customizable virtual spaces where you can collaborate in real-time, share resources, and communicate with peers.</p>
                            </div>
                        </Card>
                        <Card position={FeatureCard}>
                            <div className="feature">
                                <div className="feature-image">
                                    <img src="/src/assets/timer.png" alt="Timer" />
                                </div>
                                <h3>Personal Timers</h3>
                                <p>Integrated timers to help you manage study sessions effectively and maintain focus.</p>
                            </div>
                        </Card>
                        <Card position={FeatureCard}>
                            <div className="feature">
                                <div className="feature-image">
                                    <img src="/src/assets/knowmore.png" alt="Know More" />
                                </div>
                                <h3>Want to know more?</h3>
                                <p>Check this out: <a href="https://aryan-goyal.notion.site/Quip-Study-Together-57490b4922a04a95a86bc7f9c468373e" target="_blank">More about Quip</a></p>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* Third Section */}
                <div className="section third-section">
                    <div className="section-left">
                        <h1>Try it out!</h1>
                        <p>Feeling unsure? Try out a dummy study room before signing up</p>
                        <button className="trial-button" onClick={goToTrial}>
                            Trial Study Room
                        </button>
                    </div>
                    <div className="section-right">
                        <img
                            src="/src/assets/trialRoom.svg"
                            alt="Try Out Now"
                            className="image"
                        />
                    </div>
                </div>

                {/* Fourth Section */}
                <div className="section fourth-section">
                    <div className="section-left">
                        <img
                            src="/src/assets/signUpNow.svg"
                            alt="Sign Up Now"
                            className="image"
                        />
                    </div>
                    <div className="section-right">
                        <h1>Join Us!</h1>
                        <button className="sign-up-button">Sign Up</button>
                        <button className="log-in-button">Log In</button>
                    </div>
                </div>
            </div>
        </>
    );
}
