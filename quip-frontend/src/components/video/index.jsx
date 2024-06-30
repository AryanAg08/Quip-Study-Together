import React, { Component } from 'react'

export class Video extends Component {
  render() {

    const joinMeeting = () => {
        const join_value = "1234";
        var url = window.location.origin+"/call?meetingID="+join_value;

        window.location.replace(url);
    }

    const newMeeting = () => {
        var eight_d_value = Math.floor(Math.random()* 100000);
        var meetingUrl = window.location.origin+"/meetingID="+eight_d_value;
        window.location.replace(meetingUrl);
    }
    return (
      <>
        <button onClick={joinMeeting} >Join Meeting</button>
        <button onClick={newMeeting}>New Meeting</button>
      </>
    )
  }
}

export default Video