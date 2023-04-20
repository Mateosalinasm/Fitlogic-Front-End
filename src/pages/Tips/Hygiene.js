import TipsArr from "../../HealthTipsData";


const Hygiene = () => {
    return (
        <div className="tip-container">
            <div className="diet-image-container">
                <img className="diet-image bottom-fade up" src={TipsArr[7].image} alt="table with food" />
            </div>
            <div className="healthy-tip">
                <h1 className="diet-h1 top"><span className="diet-h1-span">Optimizing Health with Good Hygiene:</span><br/>  Essential Tips and Strategies</h1>
                <div className="diet-text-body">
                    <h2 className="diet-question">{TipsArr[7].question}</h2>
                    <h3 className="diet-paragraph1">{TipsArr[7].mainAnswer}</h3>
                    <h3 className="diet-description">{TipsArr[7].description}</h3>
                    <h3 className="diet-paragraph1 spacing bottom-space">{TipsArr[7].paragraph1}</h3>
                    <div className="diet-video-container">
                        <video className="diet-video bottom-fade" src="/assets/images/videos/friends-vid (1).mp4"
                            autoPlay
                            muted
                            loop
                        ></video>
                    </div>
                    <div className="benefits-h2-wrapper">
                        <h2 className="benefits-overview benefits-overview-h2">{TipsArr[7].benefits}</h2>
                    </div>
                    <div className="benefits-container">
                        <div className="benefits-overview">
                            <div>
                                <ol className="benefits">
                                    <li className="benefits-li">{TipsArr[7].answer1}</li>
                                    <li className="benefits-li">{TipsArr[7].answer2}</li>
                                    <li className="benefits-li">{TipsArr[7].answer3}</li>
                                    <li className="benefits-li">{TipsArr[7].answer4}</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="inline">
                        <img className="fruit-img no-border left-rem" src="/assets/images/clean (3).png" alt="" />
                    </div>
                    <div className="tips-tricks-container">
                        <div className="tips-tricks-h2 fitlogic-green ">
                            <h2>{TipsArr[7].tipsAndTricks}</h2>
                        </div>
                        <div className="tips-tricks-overview">
                            <h3>{TipsArr[7].tipOverview}</h3>
                        </div>
                        <div className="benefits-overview">
                            <ol className="tips-and-tricks">
                                    <li className="tips-and-tricks-li">{TipsArr[7].tip}</li>
                                    <li className="tips-and-tricks-li">{TipsArr[7].tip2}</li>
                                    <li className="tips-and-tricks-li">{TipsArr[7].tip3}</li>
                                    <li className="tips-and-tricks-li">{TipsArr[7].tip4}</li>
                            </ol>
                        </div>
                    </div>
                    <div className="conclusion-container">
                        <div className="conclusion">
                            <p>{TipsArr[7].conclusion}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hygiene