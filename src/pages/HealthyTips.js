import { MotionAnimate } from "react-motion-animate";
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";
import TipsArr from "../HealthTipsData";



const HealthyTips = () => {
    return (
    <>
        <div className="water-wrapper">
            <MotionAnimate
            delay={1}
            speed={1}
            ease={[0.75, 0.45, 0.53, 0.94]}
            // reset={true}
            >
            <div className="health-quote-wrapper">
            <motion.h4
                className="motivational-quote health-quote"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{
                    duration: '2',
                    delay: '2',
            }}
            >
                “Your body can stand almost anything. It’s your mind that you have to convince.”-Andrew Murphy
            </motion.h4>
            </div>
            <video className="water" src="/assets/images/videos/pexels-rostislav-uzunov-7385122.mp4" 
            autoPlay
            loop
            muted
            >
            
            </video>
            </MotionAnimate>
        </div>
        <div className="wrapper">
            <motion.h1
                className="health-title"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{
                    duration: '2',
                    delay: '3',
            }}
            >
                Healthy Tips
            </motion.h1>
            <div className="tip">
                <img
                className="health-image"
                src="/assets/images/food/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-995518546-1564092355.jpg"
                alt="First tip"
                />
                <motion.p className="tips">
                    <Link className='health-link' to='/tips/diet' onClick={() => window.scrollTo(0, 0)}>
                        {TipsArr[0].title}
                    </Link>
                </motion.p>
            </div>

            <div className="tip">
                <p className="tips">
                    <Link className='health-link' to='/tips/hydration' onClick={() => window.scrollTo(0, 0)}>
                        {TipsArr[1].title}
                    </Link>
                </p>
                <img
                src="assets/images/food/drini-water-mc-230119-70d222.webp"
                alt="Second tip"
                />
            </div>

            <div className="tip">
                <img
                src="assets/images/food/pexels-photo-4473622.jpeg"
                alt="third tip"
                />
                <p className="tips">
                    <Link className='health-link' to='/tips/exercise' onClick={() => window.scrollTo(0, 0)}>
                        {TipsArr[2].title}
                    </Link>
                </p>
            </div>

            <div className="tip">
                <p className="tips">
                    <Link className='health-link' to='/tips/sleep' onClick={() => window.scrollTo(0, 0)}>
                        {TipsArr[3].title}
                    </Link>
                </p>
                <img
                src="/assets/images/food/pexels-ketut-subiyanto-4473864.jpg"
                alt="fourth tip"
                />
            </div>

            <div className="tip">
                <img
                src="/assets/images/food/pexels-oleksandr-pidvalnyi-321576.jpg"
                alt="fifth tip"
                />
                <p className="tips">
                    <Link className='health-link' to='/tips/stress-management' onClick={() => window.scrollTo(0, 0)}>
                        {TipsArr[4].title}
                    </Link>
                </p>
            </div>

            <div className="tip">
                <p className="tips">
                    <Link className='health-link' to='/tips/alcohol' onClick={() => window.scrollTo(0, 0)}>
                        {TipsArr[5].title}
                    </Link>
                </p>
                <img
                src="assets/images/food/pexels-pixabay-301692.jpg"
                alt="sixth tip"
                />
            </div>

            <div className="tip">
                <img
                src="/assets/images/food/pexels-aphiwat-chuangchoem-405082.jpg"
                alt="seventh tip"
                />
                <p className="tips">
                    <Link className='health-link' to='/tips/smoking' onClick={() => window.scrollTo(0, 0)}>
                        {TipsArr[6].title}
                    </Link>
                </p>
            </div>

            <div className="tip">
                <p className="tips">
                    <Link className='health-link' to='/tips/hygiene' onClick={() => window.scrollTo(0, 0)}>
                        {TipsArr[7].title}
                    </Link>
                </p>
                <img
                src="/assets/images/food/pexels-bennie-lukas-bester-1138149.jpg"
                alt="eighth tip"
                />
            </div>

            <div className="tip">
                <img
                src="/assets/images/food/pexels-keira-burton-6146961.jpg"
                alt="ninth tip"
                />
                <p className="tips">
                    <Link className='health-link' to='/tips/social-connection' onClick={() => window.scrollTo(0, 0)}>
                        {TipsArr[8].title}
                    </Link>
                </p>
            </div>`
        </div>
    </>
    );
};

export default HealthyTips;
