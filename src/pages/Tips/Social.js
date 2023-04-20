import TipsArr from "../../HealthTipsData";


const Social = () => {
    return (
        <div className="tip-container">
            <div className="diet-image-container">
                <img className="diet-image bottom-fade" src={TipsArr[8].image} alt="table with food" />
            </div>
            <div className="healthy-tip">
                <h1 className="diet-h1"><span className="diet-h1-span">Staying Connected:</span><br/> Tips for Maintaining Social Connections</h1>
                <div className="diet-text-body">
                    <h2 className="diet-question">{TipsArr[8].question}</h2>
                    <h3 className="diet-paragraph1">{TipsArr[8].mainAnswer}</h3>
                    <h3 className="diet-description">{TipsArr[8].description}</h3>
                    <h3 className="diet-paragraph1 spacing bottom-space">{TipsArr[8].paragraph1}</h3>
                    <div className="diet-video-container">
                        <video className="diet-video bottom-fade" src="/assets/images/videos/friends-vid.mp4"
                            autoPlay
                            muted
                            loop
                        ></video>
                    </div>
                    <div className="benefits-h2-wrapper">
                        <h2 className="benefits-overview benefits-overview-h2">{TipsArr[8].benefits}</h2>
                    </div>
                    <div className="benefits-container">
                        <div className="benefits-overview">
                            <div>
                                <ol className="benefits">
                                    <li className="benefits-li">{TipsArr[8].answer1}</li>
                                    <li className="benefits-li">{TipsArr[8].answer2}</li>
                                    <li className="benefits-li">{TipsArr[8].answer3}</li>
                                    <li className="benefits-li">{TipsArr[8].answer4}</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="inline">
                        <img className="fruit-img no-border left-rem" src="/assets/images/people.png" alt="" />
                    </div>
                    <div className="tips-tricks-container">
                        <div className="tips-tricks-h2 fitlogic-green ">
                            <h2>{TipsArr[8].tipsAndTricks}</h2>
                        </div>
                        <div className="tips-tricks-overview">
                            <h3>{TipsArr[8].tipOverview}</h3>
                        </div>
                        <div className="benefits-overview">
                            <ol className="tips-and-tricks">
                                    <li className="tips-and-tricks-li">{TipsArr[8].tip}</li>
                                    <li className="tips-and-tricks-li">{TipsArr[8].tip2}</li>
                                    <li className="tips-and-tricks-li">{TipsArr[8].tip3}</li>
                                    <li className="tips-and-tricks-li">{TipsArr[8].tip4}</li>
                            </ol>
                        </div>
                    </div>
                    <div className="conclusion-container">
                        <div className="conclusion">
                            <p>{TipsArr[8].conclusion}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Social