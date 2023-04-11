import Video from "./components/WelcomeVideo";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "./components/Navbar";
import WorkoutBanner from "./components/WorkoutBanner";
import { MotionAnimate } from "react-motion-animate";
import Banner from "./components/Banner";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <nav className="fade"></nav>
      <Parallax pages={4}>
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
            reset={true}
          >
            <WorkoutBanner />
          </MotionAnimate>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.9}>
          <MotionAnimate
            delay={0.5}
            speed={1}
            ease={[0.75, 0.45, 0.53, 0.94]}
            reset={true}
          >
            {/* <Banner /> */}
          </MotionAnimate>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}


export default App;
