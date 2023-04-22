import Video from "../components/WelcomeVideo";
import WorkoutBanner from "../components/WorkoutBanner";
import { MotionAnimate } from "react-motion-animate";
import Banner from "../components/Banner";
// import { motion } from "framer-motion";

const Home = () => {
    return (
    <div className="Home">
        <MotionAnimate
        delay={1}
        speed={1}
        ease={[0.75, 0.45, 0.53, 0.94]}
        >
        <Video />
        </MotionAnimate>
        <br />
        <br />
        <br />
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
        delay={1.3}
        speed={1}
        ease={[0.75, 0.45, 0.53, 0.94]}
        reset={true}
        >
        <Banner />
        </MotionAnimate>
        <br />
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
            <video 
            className="green-video"
            src="/assets/images/videos/Fitlogic (1).mp4" 
            autoPlay
            loop
            muted></video>
        </MotionAnimate>
    </div>
    );
}

export default Home;

