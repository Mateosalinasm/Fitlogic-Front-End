import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Deltoids = () => {
  const deltExercises = [
    "Barbell Bench Press",
    "Dumbbell Bench Press",
    "Barbell Incline Bench Press",
    "Dumbbell Incline Bench Press",
    "Dumbbell Decline Bench Press",
    "Barbell Decline Bench Press",
    "Low Cable Chest Fly",
    "High Cable Chest Fly",
    "Dumbbell Arnold Press",
    "Dumbbell Front Raise"
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
        <Link to='/workout/push' onClick={() => window.scrollTo(0, 0)}>
          <img className="back" src="/assets/images/icons/back-arrow.png" alt="back arrow" />
        </Link>
      </motion.button>
    </div>
    <div className="parent-container">
      <div className="show-container">
        <h1 className="show-title">Deltoids Exercises</h1>
        <ul className="show-container-ul-left">
          {deltExercises.map((exercise, index) => (
            <li key={index}>{exercise}</li>
          ))}
        </ul>
      </div>
    </div>
  </>
  );
};

export default Deltoids;
