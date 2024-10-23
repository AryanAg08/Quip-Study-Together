import React, { useEffect, useState } from 'react'
import axios from "axios";
import "./sidebar.css";
import { LuLogOut } from "react-icons/lu";
import { FaRegCircleQuestion } from "react-icons/fa6";

export function SideBar() {
    const [userData, setUserData] = useState({
        userName: "",
        email: "",
        profilePictureLink: "",
    });
    const [ProfileImage, setProfileImage] = useState("");

    async function fetchUserData () {
        const token = localStorage.getItem('token'); 
        const Id = localStorage.getItem('Id');
        const response = await axios.get(`${import.meta.env.VITE_BackendAddress}/user/dashboard?id=${Id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
    
        const userDetails = response.data;
        console.log(userDetails.data)
        setUserData(userDetails.data);
        console.log("username",userData.userName)

        //if (!userData || userData.profilePictureLink === "Basic") {
            setProfileImage("https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png");
      //  } else {
        //    setProfileImage(userData.profilePictureLink);
        //}
    
    }

    function Logout () {
        localStorage.clear();
        window.location.href = "/login";
    }

  useEffect(() => {
    
    fetchUserData();
  }, []);
  
    {
        return (
            <>
            <div className='container'>
                <div className='SideBar'>
                    <div className='heading'>
                        YOUR QUIP PROFILE
                    </div>
                    <div className="pfp">
                        <img src={ProfileImage} alt="Profile" />
                    </div>
                    <div className="username">
                    {userData.userName ? userData.userName : "user"}
                    </div>
        <div className='profile-bottom'>
                    <div className="logout">
            <button className="log" onClick={() => Logout() }>
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
