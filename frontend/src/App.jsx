import "./App.css";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import NavBar from "./Navbar/Navbar";
import SignUp from "./Login/Signup.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateUserinfo } from "../utils/counterSlice.js";
import InnerLoading from "./Loading/InnerLoading.jsx";
import Notification from "./Loading/Notification.jsx";
import Board from "./Whiteboard/Board.jsx";
import Lobby from "./SocketConnection/Lobby.jsx";
import MyRoom from "./SocketConnection/MyRoom.jsx";
import StorePage from "./StorePage/StorePage.jsx";
import HelpPage from "./About/About.jsx";
import TodoPage from "./Todo/Todo.jsx";
import MainLoader from "./Loading/MainLoader.jsx";
import ErrorPage from "./Loading/ErrorPage.jsx";
import { AnimatePresence, motion } from "framer-motion";
import { LandingPage } from "./Landing/Landing.jsx";
// import { LandingPage } from "./Pages/Landing/landing.jsx";

function App() {
  const location = useLocation();
  const currentUrl = window.location.href;
  const lastUrlPart = currentUrl.split("/").pop();
  const [isModalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const userinfo = useSelector((state) => state.userinfo);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    async function redirectingfunction() {
      try {
        const res = await axios.post(`/users/redirecting`, {});

        if (res.status == 200) {
          const email = res.data.data.email;
          dispatch(
            updateUserinfo({
              email: res.data.data.email,
              phone: res.data.data.phnumber,
              joined: res.data.data.createdAt,
              show: true,
            })
          );

          localStorage.setItem("userEmail", email);
        }
      } catch (error) {
        console.error("Error while redirecting: ", error);
      } finally {
        setLoading(false);
      }
    }
    redirectingfunction();
  }, []);

  return (
    <>
      {/* <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        > */}
      <NavBar openModal={openModal} />
      <Routes>
        <Route
          path="/"
          element={
           !loading ? <Dashboard openModal={openModal} /> : <MainLoader />
          // <LandingPage openModal={openModal}/>
          }
        />
        <Route
          path="/user/:id"
          element={
            lastUrlPart == "blackboard" || lastUrlPart == "whiteboard" ? (
              <Board />
            ) : (
              <ErrorPage />
            )
          }
        />
        <Route
        path="/quip"
        element={
          !loading ? <LandingPage/> : <MainLoader />
        }
        />

        <Route
          path="/quipmeet/lobby"
          element={userinfo.email != "" ? <Lobby /> : <Navigate to="/" />}
        />
        <Route
          path="/quipmeet/:roomId"
          element={userinfo.email != "" ? <MyRoom /> : <Navigate to="/" />}
        />
        {/* <Route
          path="/quip"
          element={<LandingPage/>}
          /> */}
        <Route path="/quipstore" element={<StorePage />} />
        <Route path="/about-quipBoard" element={<HelpPage />} />
        <Route path="/todo" element={<TodoPage/>}/>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {/* </motion.div>
      </AnimatePresence> */}

      {isModalOpen && <SignUp closeModal={closeModal} />}
      <InnerLoading />
      <Notification />
    </>
  );
}

export default App;
