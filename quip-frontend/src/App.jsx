// import './App.css'
import { Route, Routes } from "react-router-dom";
import { DashboardPage } from './Pages/Dashboard';
import { LandingPage } from './Pages/Landing';
import { VideoCall } from "./Pages/VideoCall";
import { Call } from "./Call";


function App() {

  return (
    <>
       <Routes>
         <Route exact path='/dashboard' element={<DashboardPage/>} />
         <Route exact path='/landing' element={<LandingPage/>} />
         <Route exact path="/video" element={<VideoCall/>} />
         <Route exact path="/call" element={<Call/>} />  {/* For our custom room we will take their Ids and then set the environment accordingly or for tje already made rooms we will create a different component!! */}
        </Routes>  
      
    </>
  )
}

export default App;
