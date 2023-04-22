// import Carousel from "../components/Carousel"


// const Workout = () => {
//     const slides = [
//     { url: "/assets/images/workout/1.png" },
//     { url: "/assets/images/workout/pexels-scott-webb-136404.jpg" },
//     { url: "/assets/images/workout/6.png" },
//     { url: "/assets/images/workout/pexels-victor-freitas-841130.jpg" },
//     { url: "/assets/images/workout/14.png" },
//     { url: "/assets/images/workout/14.png" },
//     { url: "/assets/images/workout/14.png" },
//     { url: "/assets/images/workout/14.png" },
//     { url: "/assets/images/workout/14.png" },
//     { url: "/assets/images/workout/14.png" },
//     { url: "/assets/images/workout/14.png" },
//     { url: "/assets/images/workout/pexels-victor-freitas-2261482.jpg" },
//     ];
    
//     return (
//         <div>
//             {/* <Carousel slides={slides}/> */}
//             <div className="card-container">
//                 <article>
//                     <img src="/assets/images/workout/push.png" alt="" />
//                     <img src="/assets/images/workout/bench.png" alt="push" />
//                 </article>
//                 <article>
//                     <img src="/assets/images/workout/pull.png" alt="" />
//                     <img className="" src="/assets/images/workout/muscular-back2.png" alt="pull" />
//                 </article>
//                 <article>
//                     <img src="/assets/images/workout/legs.png" alt="" />
//                     <img className="" src="/assets/images/workout/girl-squat3.png" alt="legs" />
//                 </article>
//                 <article>
//                     <img src="/assets/images/workout/core2.png" alt="" />
//                     <img className="" src="/assets/images/workout/abs2.png" alt="legs" />
//                 </article>
//             </div>
//         </div>
//     )
// }

// export default Workout;


import Carousel from "../components/Carousel"
import { Link } from "react-router-dom"

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
            {/* <Carousel slides={slides}/> */}
            <div className="card-container">
                <article>
                    <Link to="/workout/pull">
                        <img src="/assets/images/workout/pull.png" alt="" />
                        <img className="" src="/assets/images/workout/muscular-back2.png" alt="pull" />
                    </Link>
                </article>
                <article>
                    <Link to="/workout/push">
                        <img src="/assets/images/workout/push.png" alt="" />
                        <img src="/assets/images/workout/bench.png" alt="push" />
                    </Link>
                </article>
                <article>
                    <Link to="/workout/legs">
                        <img src="/assets/images/workout/legs.png" alt="" />
                        <img className="" src="/assets/images/workout/girl-squat3.png" alt="legs" />
                    </Link>
                </article>
                <article>
                    <Link to="/workout/core">
                        <img src="/assets/images/workout/core2.png" alt="" />
                        <img className="" src="/assets/images/workout/abs2.png" alt="core" />
                    </Link>
                </article>
            </div>
        </div>
    )
}

export default Workout;
