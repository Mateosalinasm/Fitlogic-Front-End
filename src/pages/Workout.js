import Carousel from "../components/Carousel"


const Workout = () => {
    const slides = [
    { url: "/assets/images/workout/1.png" },
    { url: "/assets/images/workout/pexels-scott-webb-136404.jpg" },
    { url: "/assets/images/workout/6.png" },
    { url: "/assets/images/workout/pexels-victor-freitas-841130.jpg" },
    { url: "/assets/images/workout/14.png" },
    { url: "/assets/images/workout/14.png" },
    { url: "/assets/images/workout/14.png" },
    { url: "/assets/images/workout/14.png" },
    { url: "/assets/images/workout/14.png" },
    { url: "/assets/images/workout/14.png" },
    { url: "/assets/images/workout/14.png" },
    { url: "/assets/images/workout/pexels-victor-freitas-2261482.jpg" },

    ];
    return (
        <div>
            <Carousel slides={slides}/>
        </div>
    )
}

export default Workout;