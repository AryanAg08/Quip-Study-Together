import "./Landing.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/cards/cards";

export function LandingPage() {
    const navigate = useNavigate();

    const goToTrial = () => {
        navigate("/quipmeet/lobby");
    };

    const goToHome = () => {
        navigate("/");
    };

    const FeatureCardStyle = {
        height: "auto",
        width: "300px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "15px",
        padding: "20px",
        textAlign: "center",
        transition: "transform 0.3s ease",
    };

    return (
        <div className="landing-container">
            {/* First Section */}
            <section className="section first-section">
                <div className="section-left">
                    <h1 className="main-heading">Introducing Quip</h1>
                    <h2 className="sub-heading">Goals, Progress, Collaboration</h2>
                    <p className="description">Where learning meets teamwork</p>
                    <button className="start-button" onClick={goToHome}>Get Started</button>
                </div>
                <div className="section-right">
                    <img
                        src="/src/assets/mainPage.svg"
                        alt="students"
                        className="main-image"
                    />
                </div>
            </section>

            {/* Second Section */}
            <section className="section second-section">
                <div className="feature-container">
                    {[
                        {
                            img: "/src/assets/goal.png",
                            title: "Goal Setting",
                            description:
                                "Set academic goals, track progress, and stay on track with study objectives.",
                        },
                        {
                            img: "/src/assets/reward.png",
                            title: "Reward System",
                            description:
                                "Earn coins and unlock achievements based on your performance.",
                        },
                        {
                            img: "/src/assets/leaderboard.png",
                            title: "Analytics",
                            description:
                                "Get insights on your engagement level and view your study activity.",
                        },
                        {
                            img: "/src/assets/groupstudy.png",
                            title: "Group Study Rooms",
                            description:
                                "Collaborate in real-time, share resources, and communicate with peers.",
                        },
                        
                        {
                            img: "/src/assets/knowmore.png",
                            title: "Want to know more?",
                            description: (
                                <>
                                    Check this out:{" "}
                                    <a
                                        href="https://aryan-goyal.notion.site/Quip-Study-Together-57490b4922a04a95a86bc7f9c468373e"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        More about Quip
                                    </a>
                                </>
                            ),
                        },
                    ].map((feature, index) => (
                        <Card position={FeatureCardStyle} key={index}>
                            <div className="feature">
                                <img
                                    src={feature.img}
                                    alt={feature.title}
                                    className="feature-image"
                                />
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Third Section */}
            <section className="section third-section">
                <div className="section-left">
                    <h1>Try it out!</h1>
                    <p>Feeling unsure? Try out a dummy study room before signing up.</p>
                    <button className="trial-button" onClick={goToTrial}>
                        Trial Study Room
                    </button>
                </div>
                <div className="section-right">
                    <img
                        src="/src/assets/trialRoom.svg"
                        alt="Try Out Now"
                        className="main-image"
                    />
                </div>
            </section>

        </div>
    );
}
