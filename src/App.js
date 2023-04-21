import { Route, Routes, redirect, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home";
import Workout from "./pages/Workout";
import AddWorkout from "./pages/AddWorkout";
import HealthyTips from "./pages/HealthyTips.js";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import ResultPage from "./pages/ResultPage.js";
import Diet from './pages/Tips/Diet.js';
import "./App.css";
import Hydration from "./pages/Tips/Hydration.js";
import Exercise from "./pages/Tips/Exercise.js";
import Sleep from "./pages/Tips/Sleep.js";
import Stress from "./pages/Tips/StressManagement.js";
import Alcohol from "./pages/Tips/Alcohol.js";
import Smoking from "./pages/Tips/Smoking.js";
import Social from "./pages/Tips/Social.js";
import Hygiene from "./pages/Tips/Hygiene.js";



function App() {
  const [dataState, setDataState] = useState(() => null)
  const location = useLocation();
  const navigate = useNavigate()
  const isSignInPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";
  const handleData = (data) => {
    console.log("Inside App.js")
    console.log(data)
    setDataState(data)
}

useEffect(() =>{
  console.log("Changes took place")
  if(dataState){
  navigate("/results")}
}, [dataState])
  return (
    <div className="App">
      {!isSignInPage && !isRegisterPage && <Navbar handleData={handleData}/>}
      <nav className={isSignInPage || isRegisterPage ? null : "fade"}></nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/addWorkout" element={<AddWorkout />} />
        <Route path="/healthy-tips" element={<HealthyTips />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/results"
          element={<ResultPage dataState={dataState} />}
        />
        <Route path="/results" element={<ResultPage />} />
        <Route path="/tips/diet" element={<Diet />} />
        <Route path="/tips/hydration" element={<Hydration />} />
        <Route path="/tips/exercise" element={<Exercise />} />
        <Route path="/tips/sleep" element={<Sleep />} />
        <Route path="/tips/stress-management" element={<Stress />} />
        <Route path="/tips/alcohol" element={<Alcohol />} />
        <Route path="/tips/smoking" element={<Smoking />} />
        <Route path="/tips/hygiene" element={<Hygiene />} />
        <Route path="/tips/social-connection" element={<Social />} />
      </Routes>
    </div>
  );
}

export default App;
