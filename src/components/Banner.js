import Image from "../components/Image";

const Banner = () => {
    return(
        <div className="motivational-banner-container">
            <div className="banner-image">
                <Image/>
            </div>
            <div className="motivational-banner">
                <h1 className="title">Live a healthier life with FITLOGIC</h1>
                <h4 className="motivational-quote">"Motivation is what gets you started. Habit is what keeps you going." - Jim Ryun</h4>
            </div>
                
        </div>
    )
}

export default Banner