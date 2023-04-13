import { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Home from './pages/Home';
import Workout from './pages/Workout';
import AddWorkout from './pages/AddWorkout';
import HealthyTips from "./pages/HealthyTips.js";
import About from './pages/About';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import Video from "./components/WelcomeVideo";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import WorkoutBanner from "./components/WorkoutBanner";
import { MotionAnimate } from "react-motion-animate";
import Banner from "./components/Banner";
import { motion } from 'framer-motion'
import Image from "./components/Image";
import "./App.css";

function App() {

  const [activePage, setActivePage] = useState("home");

  const handleLinkClick = (page) => {
    setActivePage(page);
  };

  return (
    <div className="App">
      <Navbar activePage={activePage} onLinkClick={handleLinkClick} />
      <nav className="fade"></nav>

      <MotionAnimate
        delay={1}
        speed={1}
        ease={[0.75, 0.45, 0.53, 0.94]}
        reset={true}
      >
        <Video />
      </MotionAnimate>
      <br />
      <br />
      <br />
      <br />
      <br />

      <MotionAnimate
        className="workout-banner-motion"
        delay={1}
        speed={1}
        ease={[0.8, 0.45, 0.53, 0.94]}
        reset={true}
      >
        <WorkoutBanner />
      </MotionAnimate>
      <br />
      <br />
      <br />
      <br />
      <br />
      <MotionAnimate
        delay={0.7}
        speed={1}
        ease={[0.75, 0.45, 0.53, 0.94]}
        reset={true}
      >
        <Banner />
      </MotionAnimate>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/addWorkout" element={<AddWorkout />} />
        <Route path="/healthy-tips" element={<HealthyTips />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
