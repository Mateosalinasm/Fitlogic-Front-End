import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const Glutes = () => {
  const glutesExercises = [
    "Barbell Deadlift",
    "Hex Bar Deadlift",
    "Barbell Back Squat",
    "Smith Machine Back Squat",
    "Barbell Hip Thrusts",
    "Machine Hip Thrusts",
    "Barbell Forward Lunge",
    "Barbell Reverse Lunge",
    "Air Squat",
    "Barbell Bench Press",
    "Incline Barbell Bench Press",
    "Dumbbell Flyes",
    "Cable Flyes",
    "Overhead Press",
    "Dumbbell Lateral Raise",
    "Cable Lateral Raise",
    "Barbell Bent Over Row",
    "Seated Cable Row",
    "Lat Pulldown",
    "Pullups",
    "Barbell Curl",
    "Preacher Curl",
    "Hammer Curl",
    "Cable Tricep Extension",
    "Skull Crusher",
    "Dumbbell Kickback",
    "Plank",
    "Side Plank",
    "Russian Twist",
    "Bicycle Crunches"
  ];

  return (
  <>
    <div className="back-btn">
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="menu-btn"
            onClick={() => null}
        > 
            <Link to='/workout/legs' onClick={() => window.scrollTo(0, 0)}>
                <img className="back" src="/assets/images/icons/back-arrow.png" alt="back arrow" />
            </Link>
        </motion.button>
    </div>
    <div className="parent-container">
      <div className="show-container">
        <h1 className="show-title">Glutes Exercises</h1>
        <ul className="show-container-ul">
          {glutesExercises.map((exercise, index) => (
            <li key={index}>{exercise}</li>
          ))}
        </ul>
      </div>
    </div>
  </>
  );
};

export default Glutes;