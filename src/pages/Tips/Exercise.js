import TipsArr from "../../HealthTipsData";


const Exercise = () => {
    return (
        <div className="tip-container">
            <div className="diet-image-container">
                <img className="diet-image bottom-fade" src={TipsArr[2].image} alt="table with food" />
            </div>
            <div className="healthy-tip">
                <h1 className="diet-h1 top"><span className="diet-h1-span">The Benefits of Exercise:</span><br/> Tips and Tricks for Living an Active Life</h1>
                <div className="diet-text-body">
                    <h2 className="diet-question">{TipsArr[2].question}</h2>
                    <h3 className="diet-paragraph1">{TipsArr[2].mainAnswer}</h3>
                    <h3 className="diet-description">{TipsArr[2].description}</h3>
                    <h3 className="diet-paragraph1 spacing">{TipsArr[2].paragraph1}</h3>
                    <div className="diet-video-container">
                        <video className="diet-video bottom-fade" src="/assets/images/videos/exercise.mp4"
                            autoPlay
                            muted
                            loop
                        ></video>
                    </div>
                    <div className="benefits-h2-wrapper">
                        <h2 className="benefits-overview benefits-overview-h2">{TipsArr[2].benefits}</h2>
                    </div>
                    <div className="benefits-container">
                        <div className="benefits-overview">
                            <div>
                                <ol className="benefits">
                                    <li className="benefits-li">{TipsArr[2].benefit1}</li>
                                    <li className="benefits-li">{TipsArr[2].benefit2}</li>
                                    <li className="benefits-li">{TipsArr[2].benefit3}</li>
                                    <li className="benefits-li">{TipsArr[2].benefit4}</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="inline">
                        <img className="fruit-img no-border right-rem" src="/assets/images/workout/pexels-victor-freitas-2261482.jpg" alt="" />
                    </div>
                    <div className="tips-tricks-container">
                        <div className="tips-tricks-h2 fitlogic-green ">
                            <h2>{TipsArr[2].tipsAndTricks}</h2>
                        </div>
                        <div className="tips-tricks-overview">
                            <h3>{TipsArr[2].tipOverview}</h3>
                        </div>
                        <div className="benefits-overview">
                            <ol className="tips-and-tricks">
                                    <li className="tips-and-tricks-li">{TipsArr[2].tip}</li>
                                    <li className="tips-and-tricks-li">{TipsArr[2].tip2}</li>
                                    <li className="tips-and-tricks-li">{TipsArr[2].tip3}</li>
                                    <li className="tips-and-tricks-li">{TipsArr[2].tip4}</li>
                            </ol>
                        </div>
                    </div>
                    <div className="conclusion-container">
                        <div className="conclusion">
                            <p>{TipsArr[2].conclusion}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Exercise