import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import io from "socket.io-client";
const socket = io("http://localhost:5001");

export function Call () {
//    const sendMessage = () => {
//     // socket.emit();
//     socket.on("connect", () => {
//         console.log("Connected to server!!", socket.id)
//     });

//     socket.on("disconnect", () => {
//         console.log("disconnected from server");
//       });
//    }

// sendMessage();
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
    var user_id;
    var meeting_id;
    function init(uid, mid) {
        user_id = uid;
        meeting_id = mid;
      event_process_for_signaling_server();
    }

    function event_process_for_signaling_server() {
        socket.on("connect", () => {
            if (socket.connected) {
    
                if (user_id != "" && meeting_id != "" ) {
                    socket.emit("userconnect", {
                      displayName: user_id,
                      meetingId: meeting_id
                    })
                }
            }
           });

           socket.on("inform_others_about_me", function(data) {
             addUser(data.other_user_id, data.connId)
           })
    }

   return {
       _init: function(uid, mid) {
           init (uid, mid)
       }
   }
 })();