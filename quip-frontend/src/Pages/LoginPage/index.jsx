import React, { useEffect } from 'react';
import './LoginPage.css';
import { setupEventListeners, validateForm } from './script_login';

export const LoginPage = () => {
    useEffect(() => {
        setupEventListeners();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
        }
    };

    return (
        <div className={`container`} id="container">
            <div className={`main-container sign-up`}>
                <form onSubmit={handleSubmit}>
                    <h1>Create Account</h1>
                    <span>or use your email for registration</span>
                    <input type="text" id="name" placeholder="Name" />
                    <input type="email" id="email" placeholder="Email" />
                    <input type="password" id="password" placeholder="Password" />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
            <div className={`main-container log-in`}>
                <form onSubmit={handleSubmit}>
                    <h1>Log In</h1>
                    <input type="email" id="email" placeholder="Email" />
                    <input type="password" id="password" placeholder="Password" />
                    <button type="submit">Log In</button>
                </form>
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="hidden" id="login">Log In</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button className="hidden" id="register">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


