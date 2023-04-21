import TipsArr from "../../HealthTipsData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const Diet = () => {
    return (
        <div className="tip-container">
            <div className="back-container">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    className="menu-btn"
                    onClick={() => null}
                > 
                    <Link to='/healthy-tips' onClick={() => window.scrollTo(0, 0)}>
                        <img className="back" src="/assets/images/icons/back-arrow.png" alt="back arrow" />
                    </Link>
                </motion.button>
            </div>
            <div className="diet-image-container">
                <img className="diet-image" src={TipsArr[0].image} alt="table with food" />
            </div>
            <div className="healthy-tip">
                <h1 className="diet-h1"><span className="diet-h1-span">Eating a Balanced Diet:</span><br/> Tips and Tricks for a Healthier Lifestyle</h1>
                <div className="diet-text-body">
                    <h2 className="diet-question">{TipsArr[0].question}</h2>
                    <h3 className="diet-paragraph1">{TipsArr[0].mainAnswer}</h3>
                    <h3 className="diet-description">{TipsArr[0].description}</h3>
                    <h3 className="diet-paragraph1 spacing">{TipsArr[0].paragraph1}</h3>
                    <div className="diet-video-container">
                        <video className="diet-video" src="/assets/images/videos/Untitled design (7).mp4"
                            autoPlay
                            loop
                            muted
                        ></video>
                    </div>
                    <div className="benefits-h2-wrapper">
                        <h2 className="benefits-overview benefits-overview-h2">{TipsArr[0].benefitsOverview}</h2>
                    </div>
                    <div className="benefits-container">
                        <div className="benefits-overview">
                            <div>
                                <ol className="benefits">
                                    <li className="benefits-li">{TipsArr[0].benefit1}</li>
                                    <li className="benefits-li">{TipsArr[0].benefit2}</li>
                                    <li className="benefits-li">{TipsArr[0].benefit3}</li>
                                    <li className="benefits-li">{TipsArr[0].benefit4}</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div >
                        <img className="fruit-img right-rem " src="/assets/images/food/pexels-jane-doan-1092730.jpg" alt="" />
                    </div>
                    <div className="tips-tricks-container">
                        <div className="tips-tricks-h2 fitlogic-green ">
                            <h2>{TipsArr[0].tipsAndTricks}</h2>
                        </div>
                        <div className="tips-tricks-overview">
                            <h3>{TipsArr[0].tipOverview}</h3>
                        </div>
                        <div className="benefits-overview">
                            <ol className="tips-and-tricks">
                                <li className="tips-and-tricks-li">{TipsArr[0].tip1}</li>
                                <li className="tips-and-tricks-li">{TipsArr[0].tip2}</li>
                                <li className="tips-and-tricks-li">{TipsArr[0].tip3}</li>
                                <li className="tips-and-tricks-li">{TipsArr[0].tip4}</li>
                                <li className="tips-and-tricks-li">{TipsArr[0].tip5}</li>
                                <li className="tips-and-tricks-li">{TipsArr[0].tip6}</li>
                            </ol>
                        </div>
                    </div>
                    <div className="conclusion-container">
                        <div className="conclusion">
                            <p>{TipsArr[0].conclusion}</p>
                        </div>
                    </div>
                    <div className="footer-back-container">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                            className="menu-btn"
                            onClick={() => null}
                        > 
                            <Link to='/healthy-tips' onClick={() => window.scrollTo(0, 0)}>
                                <h2 className="fitlogic-green font">Back to Tips</h2>
                            </Link>
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Diet