import { Route, Routes, redirect, useLocation, useNavigate } from "react-router-dom";
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
import "./App.css";
import { useEffect, useState } from "react";

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
        {/* <Route path="/results" element={<ResultPage />} /> */}
        <Route path="/tip/diet" element={<Register />} />
        <Route path="/tip/hydration" element={<Register />} />
        <Route path="/tip/exercise" element={<Register />} />
        <Route path="/tip/sleep" element={<Register />} />
        <Route path="/tip/stress-management" element={<Register />} />
        <Route path="/tip/alcohol" element={<Register />} />
        <Route path="/tip/smoking" element={<Register />} />
        <Route path="/tip/social-connection" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
