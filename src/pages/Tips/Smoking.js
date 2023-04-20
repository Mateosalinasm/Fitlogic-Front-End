import TipsArr from "../../HealthTipsData";


const Smoking = () => {
    return (
        <div className="tip-container">
            <div className="diet-image-container">
                <img className="diet-image bottom-fade level" src={TipsArr[6].image} alt="table with food" />
            </div>
            <div className="healthy-tip">
                <h1 className="diet-h1"><span className="diet-h1-span">Quitting Smoking:</span><br/> Tips and Strategies for Success</h1>
                <div className="diet-text-body">
                    <h2 className="diet-question">{TipsArr[6].question}</h2>
                    <h3 className="diet-paragraph1">{TipsArr[6].mainAnswer}</h3>
                    <h3 className="diet-description">{TipsArr[6].description}</h3>
                    <h3 className="diet-paragraph1 spacing">{TipsArr[6].paragraph1}</h3>
                    <div className="diet-video-container">
                        <video className="diet-video bottom-fade" src="/assets/images/videos/smoke.mp4"
                            autoPlay
                            muted
                            loop
                        ></video>
                    </div>
                    <div className="benefits-h2-wrapper">
                        <h2 className="benefits-overview benefits-overview-h2">{TipsArr[6].benefits}</h2>
                    </div>
                    <div className="benefits-container">
                        <div className="benefits-overview">
                            <div>
                                <ol className="benefits">
                                    <li className="benefits-li">{TipsArr[6].benefit1}</li>
                                    <li className="benefits-li">{TipsArr[6].benefit2}</li>
                                    <li className="benefits-li">{TipsArr[6].benefit3}</li>
                                    <li className="benefits-li">{TipsArr[6].benefit4}</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="inline">
                        <img className="fruit-img no-border " src="/assets/images/smoking.png" alt="" />
                    </div>
                    <div className="tips-tricks-container">
                        <div className="tips-tricks-h2 fitlogic-green ">
                            <h2>{TipsArr[6].tipsAndTricks}</h2>
                        </div>
                        <div className="tips-tricks-overview">
                            <h3>{TipsArr[6].tipOverview}</h3>
                        </div>
                        <div className="benefits-overview">
                            <ol className="tips-and-tricks">
                                    <li className="tips-and-tricks-li">{TipsArr[6].tip}</li>
                                    <li className="tips-and-tricks-li">{TipsArr[6].tip2}</li>
                                    <li className="tips-and-tricks-li">{TipsArr[6].tip3}</li>
                                    <li className="tips-and-tricks-li">{TipsArr[6].tip4}</li>
                            </ol>
                        </div>
                    </div>
                    <div className="conclusion-container">
                        <div className="conclusion">
                            <p>{TipsArr[6].conclusion}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Smoking