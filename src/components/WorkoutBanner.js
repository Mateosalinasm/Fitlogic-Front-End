const WorkoutBanner = () => {
    return (
    <div className="workout-banner-container">
        <div className="mission">
            <h1 className="mission-title">Our Mission</h1>
            <div className="mission-description">
                <p className="about-us">
                    Here at Fitlogic, we strive to help people lead healthier lives by
                    focusing on three key areas: exercise, diet, and meditation. We
                    believe that these three components are essential for achieving
                    optimal health and wellness, and we offer a variety of resources and
                    tools to help our visitors get started on their own path to better
                    health. Whether you're looking to improve your fitness, eat a
                    healthier diet, or reduce stress through meditation, we're here to
                    help you reach your goals and live your best life.
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