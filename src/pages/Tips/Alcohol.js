import TipsArr from "../../HealthTipsData";


const Alcohol = () => {
    return (
        <div className="tip-container">
            <div className="diet-image-container">
                <img className="diet-image bottom-fade up" src={TipsArr[5].image} alt="table with food" />
            </div>
            <div className="healthy-tip">
                <h1 className="diet-h1"><span className="diet-h1-span">Limiting Alcohol:</span><br/> Tips for Lowering Alcohol Consumption</h1>
                <div className="diet-text-body">
                    <h2 className="diet-question">{TipsArr[5].question}</h2>
                    <h3 className="diet-paragraph1">{TipsArr[5].mainAnswer}</h3>
                    <h3 className="diet-description">{TipsArr[5].description}</h3>
                    <h3 className="diet-paragraph1 spacing">{TipsArr[5].paragraph1}</h3>
                    <div className="diet-video-container">
                        <video className="diet-video bottom-fade" src="/assets/images/videos/stress-vid.mp4"
                            autoPlay
                            muted
                            loop
                        ></video>
                    </div>
                    <div className="benefits-h2-wrapper">
                        <h2 className="benefits-overview benefits-overview-h2">{TipsArr[5].benefits}</h2>
                    </div>
                    <div className="benefits-container">
                        <div className="benefits-overview">
                            <div>
                                <ol className="benefits">
                                    <li className="benefits-li">{TipsArr[5].benefit1}</li>
                                    <li className="benefits-li">{TipsArr[5].benefit2}</li>
                                    <li className="benefits-li">{TipsArr[5].benefit3}</li>
                                    <li className="benefits-li">{TipsArr[5].benefit4}</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="inline">
                        <img className="fruit-img no-border left-rem" src="/assets/images/stress (1).png" alt="" />
                    </div>
                    <div className="tips-tricks-container">
                        <div className="tips-tricks-h2 fitlogic-green ">
                            <h2>{TipsArr[5].tipsAndTricks}</h2>
                        </div>
                        <div className="tips-tricks-overview">
                            <h3>{TipsArr[5].tipOverview}</h3>
                        </div>
                        <div className="benefits-overview">
                            <ol className="tips-and-tricks">
                                    <li className="tips-and-tricks-li">{TipsArr[5].tip}</li>
                                    <li className="tips-and-tricks-li">{TipsArr[5].tip2}</li>
                                    <li className="tips-and-tricks-li">{TipsArr[5].tip3}</li>
                                    <li className="tips-and-tricks-li">{TipsArr[5].tip4}</li>
                            </ol>
                        </div>
                    </div>
                    <div className="conclusion-container">
                        <div className="conclusion">
                            <p>{TipsArr[5].conclusion}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Alcohol