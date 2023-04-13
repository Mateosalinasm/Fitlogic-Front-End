import { useState } from "react";

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar.js'

import Home from './pages/Home';
import Workout from './pages/Workout';
import AddWorkout from './pages/AddWorkout';
import Helthytips from './pages/Helthytips';
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

  return (
    <div className="App">

      <Navbar />

      

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Workout" element={<Workout />} />
          <Route path="/AddWorkout" element={<AddWorkout />} />
          <Route path="/Helthytips" element={<Helthytips />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/SignIn" element={<SignIn />} />
        </Routes>

      

      <nav className="fade"></nav>
      <Parallax pages={3} style={{ top: "0", left: "0" }}>
        <ParallaxLayer speed={0.4}>
          <MotionAnimate
            delay={1}
            speed={1}
            ease={[0.75, 0.45, 0.53, 0.94]}
           reset={true}
          >
            <Video />
          </MotionAnimate>
        </ParallaxLayer>

        <ParallaxLayer className="test" offset={1} speed={1.4}>
          <MotionAnimate
            delay={0.2}
            speed={1}
            ease={[0.5, 0.45, 0.53, 0.94]}
            reset={true}
          >
            <WorkoutBanner />
          </MotionAnimate>
        </ParallaxLayer>

        <ParallaxLayer offset={1.59} speed={0.9}>
          <MotionAnimate
            delay={0.7}
            speed={1}
            ease={[0.75, 0.45, 0.53, 0.94]}
            reset={true}
          >
            <Banner />
          </MotionAnimate>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
