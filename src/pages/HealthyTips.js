import { MotionAnimate } from "react-motion-animate";
import { motion } from 'framer-motion'
import TipsArr from "../HealthTipsData";


const HealthyTips = ({title}) => {
    return (
    <>
        <div className="water-wrapper">
            <MotionAnimate
            delay={1}
            speed={1}
            ease={[0.75, 0.45, 0.53, 0.94]}
            // reset={true}
            >
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
            <motion.h4
                className="motivational-quote health-quote"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{
                    duration: '2',
                    delay: '4',
            }}
            >
                “Your body can stand almost anything. It’s your mind that you have to convince.”-Andrew Murphy
            </motion.h4>
            <video className="water" src="/assets/images/videos/pexels-rostislav-uzunov-7385122.mp4" 
            autoPlay
            loop
            muted
            >
            
            </video>
            </MotionAnimate>
        </div>
        <div className="wrapper">
            <div className="tip">
                <img
                className="health-image"
                src="/assets/images/food/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-995518546-1564092355.jpg"
                alt="First tip"
                />
                <motion.p className="tips">
                    {TipsArr[0].title}
                </motion.p>
            </div>

            <div className="tip">
                <p className="tips">
                    {TipsArr[1].title}
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
                    {TipsArr[2].title}
                </p>
            </div>

            <div className="tip">
                <p className="tips">
                    {TipsArr[3].title}
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
                    {TipsArr[4].title}
                </p>
            </div>

            <div className="tip">
                <p className="tips">
                    {TipsArr[5].title}
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
                    {TipsArr[6].title}
                </p>
            </div>

            <div className="tip">
                <p className="tips">
                    {TipsArr[7].title}
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
                    {TipsArr[8].title}
                </p>
            </div>`
        </div>
    </>
    );
};

export default HealthyTips;
