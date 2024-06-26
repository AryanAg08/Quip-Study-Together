import React from 'react'
import "./try.css";
import { LuLogOut } from "react-icons/lu";
import { FaRegCircleQuestion } from "react-icons/fa6";

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
        <div className='profile-bottom'>
                    <div className="logout">
            <button className="log">
            <LuLogOut style={{ marginRight: '8px' }}/>
                Logout
            </button>
   </div>
         <div className='help'>
            <FaRegCircleQuestion style={{marginBottom: '4px', marginTop: "4px", marginLeft: "4px", fontSize: "35px"}}  />
            <p className='need-help'>Need Help ?</p>
            <p className='reach-out'>Reach out to us</p>
            <div className='contact-us'>
                <button >CONTACT SUPPORT</button>
            </div>
         </div>
                </div>
                </div>
                </div>
            </>
        )
    }
}
