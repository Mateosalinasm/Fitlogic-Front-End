const About = () => {
    return (
        <div className="about-page-container">
            <video className="sign-in-background" src="/assets/images/videos/1440 wave (1).mp4"
            autoPlay
            loop
            muted
                ></video>
            <div className="about-page">
                <div className="about-h1-container">
                    <h1 className="about-h1">About Us</h1>
                </div>
                <p><span className="welcome-about">Welcome to Fitlogic</span>, the health and fitness app that helps you live a healthier lifestyle through diet and exercise. Our app provides you with the necessary tools to achieve your fitness goals and improve your overall well-being.<br/><br/>
                Our healthy tips section provides you with valuable insights on how to make healthy choices in your daily life. From nutrition advice to lifestyle tips, our team of experts is here to guide you towards a healthier you.<br/><br/>
                Our workout section features a variety of exercises that you can do at the gym. Whether you're a beginner or an experienced gym-goer, our workouts cater to all fitness levels. You can even add your favorite exercises to your personal workout routine, allowing you to stay on track and reach your fitness goals.<br/><br/>
                At Fitlogic, we believe that a healthy lifestyle is achievable for everyone. We are committed to helping you reach your full potential and become the best version of yourself. Join us on this journey towards a healthier, happier you.</p>
            </div>
        </div>
    )
}

export default About;