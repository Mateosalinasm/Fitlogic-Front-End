import { Route, Routes, useLocation } from "react-router-dom";
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

function App() {
  const location = useLocation();
  const isSignInPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";

  return (
    <div className="App">
      {!isSignInPage && !isRegisterPage && <Navbar />}
      <nav className={isSignInPage || isRegisterPage ? null : "fade"}></nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/addWorkout" element={<AddWorkout />} />
        <Route path="/healthy-tips" element={<HealthyTips />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        {/* <Route
          path="/results"
          element={<ResultPage searchResults={location.state?.searchResults || []} />}
        /> */}
        <Route path="/results" element={<ResultPage />} />
        <Route path="/tips/diet" element={<Diet />} />
        <Route path="/tips/hydration" element={<Register />} />
        <Route path="/tips/exercise" element={<Register />} />
        <Route path="/tips/sleep" element={<Register />} />
        <Route path="/tips/stress-management" element={<Register />} />
        <Route path="/tips/alcohol" element={<Register />} />
        <Route path="/tips/smoking" element={<Register />} />
        <Route path="/tips/social-connection" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
