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
        <ParallaxLayer speed={0.2}>
          <MotionAnimate
            delay={1}
            speed={2}
            ease={[0.75, 0.45, 0.53, 0.94]}
            reset={true}
          >
            <Video />
          </MotionAnimate>
        </ParallaxLayer>
        <ParallaxLayer className="test" offset={0.8} speed={0.7}>
          <MotionAnimate
            delay={2.5}
            speed={2}
            ease={[0.75, 0.45, 0.53, 0.94]}
            reset={true}>
          <WorkoutBanner />
          </MotionAnimate>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}


export default App;
