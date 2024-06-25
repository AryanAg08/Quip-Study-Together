import React from 'react'
import "./try.css";
import { LuLogOut } from "react-icons/lu";

export function SideBar() {
    {
        return (
            <>
            <div className='container'>
                <div className='SideBar'>
                    <div className='heading'>
                        YOUR QUIP PROFILE
                    </div>
                    <div className="pfp">
                        <img src="path_to_your_image.jpg" alt="Profile" />
                    </div>
                    <div className="username">
                        @Username
                    </div>

                    <div className="logout">
            <button className="log">
            <LuLogOut style={{ marginRight: '8px' }}/>
                Logout
            </button>
   </div>
                </div>
                </div>
            </>
        )
    }
}
