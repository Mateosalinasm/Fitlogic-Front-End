import TipsArr from "../../HealthTipsData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hydration = () => {
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
                <img className="diet-image bottom-fade" src={TipsArr[1].image} alt="table with food" />
            </div>
            <div className="healthy-tip">
                <h1 className="diet-h1"><span className="diet-h1-span">Staying Hydrated:</span><br/> Tips and Tricks for Optimal Health</h1>
                <div className="diet-text-body">
                    <h2 className="diet-question">{TipsArr[1].question}</h2>
                    <h3 className="diet-paragraph1">{TipsArr[1].mainAnswer}</h3>
                    <h3 className="diet-description">{TipsArr[1].description}</h3>
                    <h3 className="diet-paragraph1 spacing">{TipsArr[1].paragraph1}</h3>
                    <div className="diet-video-container">
                        <video className="diet-video bottom-fade" src="/assets/images/videos/hydrate.mp4"
                            autoPlay
                            muted
                            loop
                        ></video>
                    </div>
                    <div className="benefits-h2-wrapper">
                        <h2 className="benefits-overview benefits-overview-h2">{TipsArr[1].benefits}</h2>
                    </div>
                    <div className="benefits-container">
                        <div className="benefits-overview">
                            <div>
                                <ol className="benefits">
                                    <li className="benefits-li">{TipsArr[1].benefit1}</li>
                                    <li className="benefits-li">{TipsArr[1].benefit2}</li>
                                    <li className="benefits-li">{TipsArr[1].benefit3}</li>
                                    <li className="benefits-li">{TipsArr[1].benefit4}</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div >
                        <img className="fruit-img no-border" src="/assets/images/food/drinking water.png" alt="" />
                    </div>
                    <div className="tips-tricks-container">
                        <div className="tips-tricks-h2 fitlogic-green ">
                            <h2>{TipsArr[1].tipsAndTricks}</h2>
                        </div>
                        <div className="tips-tricks-overview">
                            <h3>{TipsArr[1].tipOverview}</h3>
                        </div>
                        <div className="benefits-overview">
                            <ol className="tips-and-tricks">
                                    <li className="tips-and-tricks-li">{TipsArr[1].tip1}</li>
                                    <li className="tips-and-tricks-li">{TipsArr[1].tip2}</li>
                                    <li className="tips-and-tricks-li">{TipsArr[1].tip3}</li>
                                    <li className="tips-and-tricks-li">{TipsArr[1].tip4}</li>
                            </ol>
                        </div>
                    </div>
                    <div className="conclusion-container">
                        <div className="conclusion">
                            <p>{TipsArr[1].conclusion}</p>
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

export default Hydration