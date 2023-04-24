import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home";
import Workout from "./pages/Workout";
import AddWorkout from "./pages/AddWorkout";
import HealthyTips from "./pages/HealthyTips.js";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login.js";
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
import Pull from "./components/Pull.js";
import Push from "./components/Push.js";
import Core from "./components/Core.js";
import Legs from "./components/Legs.js";
import Biceps from "./components/Biceps.js";
import LatissimusDorsi from "./components/LatissimusDorsi.js";
import Trapezius from "./components/Trapezius.js";
import PectoralisMajor from "./components/PectoralisMajor.js";
import Deltoids from "./components/Deltoids.js";
import Triceps from "./components/Triceps.js";
import Glutes from "./components/Glutes.js";
import Quadriceps from "./components/Quadriceps.js";
import Hamstrings from "./components/Hamstring.js";
import Abdominal from "./components/Abdominals.js";



function App() {
  const [dataState, setDataState] = useState(() => null)
  const location = useLocation();
  const navigate = useNavigate()
  const isSignInPage = location.pathname === "/login";
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
      {!isSignInPage  && <Navbar handleData={handleData}/>}
      <nav className={isSignInPage ? null : "fade"}></nav>
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
        <Route  path="/workout/pull" element={<Pull />} />
        <Route  path="/workout/push" element={<Push />} />
        <Route  path="/workout/core" element={<Core />} />
        <Route  path="/workout/legs" element={<Legs />} />
        <Route path="/workout/pull/biceps" element={<Biceps />} />
        <Route  path="/workout/pull/trapezius" element={<Trapezius />} />
        <Route  path="/workout/pull/latissimus-dorsi" element={<LatissimusDorsi />} />
        <Route path="/workout/push/pectoralis-major" element={<PectoralisMajor />} />
        <Route path="/workout/push/deltoids" element={<Deltoids />} />
        <Route path="/workout/push/triceps" element={<Triceps />} />
        <Route path="/workout/legs/glutes" element={<Glutes />} />
        <Route path="/workout/legs/quadriceps" element={<Quadriceps />} />
        <Route path="/workout/legs/hamstring" element={<Hamstrings />} />
        <Route path="/workout/core/abdominal" element={<Abdominal />} />
      </Routes>
    </div>
  );
}

export default App;
