import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import io from "socket.io-client";
const socket = io("http://localhost:5001");

export function Call () {
   const sendMessage = () => {
    // socket.emit();
    socket.on("connect", () => {
        console.log("Connected to server!!", socket.id)
    });

    socket.on("disconnect", () => {
        console.log("disconnected from server");
      });
   }

sendMessage();
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
  const meetingID = searchParams.get('meetingID');
  console.log(meetingID)

  var user_id = window.prompt('Enter the username!!');

  if (!user_id || !meetingID) {
    alert("user id or meeting id required!!");
    navigate("/video");
    return;
  }
 Myapp._init(user_id, meetingID);
  

    console.log("this is calll!!")
    return(
        <>
        <div>hello this is meeting!!</div>
        
        </>
    )
}

var Myapp = (function() {

    function init(uid, mid) {
       
    }

   return {
       _init: function(uid, mid) {
           init (uid, mid)
       }
   }
 })();