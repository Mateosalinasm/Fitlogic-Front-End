import Carousel from "../components/Carousel"


const Workout = () => {
    const slides = [
    { url: "/assets/images/workout/1.png" },
    { url: "/assets/images/workout/5.png" },
    { url: "/assets/images/workout/6.png" },
    { url: "/assets/images/workout/10.png" },
    { url: "/assets/images/workout/14.png" },
      // { url: "/assets/images/6.png" },
      // { url: "/assets/images/7.png" },
      // { url: "/assets/images/8.png" },
    ];
    return (
        <div>
            <Carousel slides={slides}/>
        </div>
    )
}

export default Workout;