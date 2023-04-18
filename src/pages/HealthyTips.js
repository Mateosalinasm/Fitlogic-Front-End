import { MotionAnimate } from "react-motion-animate";
import { motion } from 'framer-motion'

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
                <p className="tips">
                Eat a balanced diet: Include a variety of fruits, vegetables,
                whole grains, lean proteins, and healthy fats in your diet to
                ensure that you are getting all the nutrients your body needs.
                </p>
            </div>

            <div className="tip">
                <p className="tips">
                Stay hydrated: Drink plenty of water and other fluids to keep your
                body hydrated and functioning properly.
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
                Exercise regularly: Engage in physical activity for at least 30
                minutes a day, whether it be through aerobic exercise, strength
                training, or other forms of activity.
                </p>
            </div>

            <div className="tip">
                <p className="tips">
                Get enough sleep: Aim for 7-9 hours of sleep each night to help
                your body recover and recharge.
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
                Manage stress: Find healthy ways to manage stress, such as
                meditation, deep breathing, or exercise.
                </p>
            </div>

            <div className="tip">
                <p className="tips">
                Limit alcohol intake: Drink alcohol in moderation, if at all.
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
                Quit smoking: If you smoke, quit as soon as possible.
                </p>
            </div>

            <div className="tip">
                <p className="tips">
                Practice good hygiene: Wash your hands regularly, cover your mouth
                when you cough or sneeze, and keep your living spaces clean.
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
                Stay connected: Maintain social connections with friends and
                family to promote mental health and well-being.
                </p>
            </div>`
        </div>
    </>
    );
};

export default HealthyTips;
