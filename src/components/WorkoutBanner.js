const WorkoutBanner = () => {
    return (
    <div className="workout-banner-container">
        <div className="mission">
            <h1 className="mission-title">Our Mission</h1>
            <div className="mission-description">
                <p className="about-us">
                    <span className="fitlogic-green">Here at Fitlogic</span>, we help people lead healthier lives through exercise, diet, and meditation. We offer resources and tools to assist you in achieving optimal health and wellness. Whether your goal is to improve fitness, eat a healthier diet, or reduce stress, we're here to help.
                </p>
            </div>
        </div>
        <div className="workout-banner">
            <img
                className="workout"
                src="assets/images/workout/5.png"
                alt=""
            />
        </div>
    </div>
    );
}

export default WorkoutBanner