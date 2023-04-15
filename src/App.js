import { useState } from "react";
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Home from './pages/Home';
import Workout from './pages/Workout';
import AddWorkout from './pages/AddWorkout';
import HealthyTips from "./pages/HealthyTips.js";
import About from './pages/About';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
// import Register from './components/Register';

import "./App.css";

function App() {

  // const [activePage, setActivePage] = useState("home");

  // const handleLinkClick = (page) => {
  //   setActivePage(page);
  // };

  return (
    <div className="App">
      <Navbar  />
      <nav className="fade"></nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/addWorkout" element={<AddWorkout />} />
        <Route path="/healthy-tips" element={<HealthyTips />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
      {/* <Register /> */}
    </div>
  );
}

export default App;