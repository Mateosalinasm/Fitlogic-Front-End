import Video from "./components/WelcomeVideo";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "./components/Navbar";
import WorkoutBanner from "./components/WorkoutBanner";
import { MotionAnimate } from "react-motion-animate";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <nav className="fade"></nav>
      <Parallax pages={2}>
        <ParallaxLayer speed={0.1}>
          <Video />
        </ParallaxLayer>
        <ParallaxLayer className="test" offset={1} speed={1}>
          <WorkoutBanner />
        </ParallaxLayer>
        <ParallaxLayer>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
