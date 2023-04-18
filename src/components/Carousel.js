import { useState, useEffect } from "react";

const Carousel = ({ slides }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const slideStyles = {
        width: "100%",
        height: "100%",
        borderRadius: "30px",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentImage].url})`,
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
        const isLastSlide = currentImage === slides.length - 1;
        const newImage = isLastSlide ? 0 : currentImage + 1;
        setCurrentImage(newImage);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [currentImage, slides]);

    // const previous = () => {
    //     const isFirstSlide = currentImage === 0;
    //     const newImage = isFirstSlide ? slides.length - 1 : currentImage - 1;
    //     setCurrentImage(newImage);
    // };

    // const next = () => {
    //     const isLastSlide = currentImage === slides.length - 1;
    //     const newImage = isLastSlide ? 0 : currentImage + 1;
    //     setCurrentImage(newImage);
    // };

    return (
        <div className="carousel-container">
        <div style={slideStyles}></div>
        </div>
    );
};

export default Carousel;

// const leftBtn = {
//     position: 'absolute',
//     top: '50%',
//     transform: 'translate(0,-50%',
//     left: '32px',
//     fontSize: '45px',
//     color: '#fff',
//     zIndex: 1,
//     cursor: 'pointer'
// }
// const rightBtn = {
//     position: 'absolute',
//     top: '50%',
//     transform: 'translate(0,-50%',
//     right: '32px',
//     fontSize: '45px',
//     color: '#fff',
//     zIndex: 1,
//     cursor: 'pointer'
// }
