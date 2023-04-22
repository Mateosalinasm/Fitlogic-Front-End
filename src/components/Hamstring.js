import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const Hamstrings = () => {
  const hamstringsExercises = [
    "Barbell Back Squat",
    "Smith Machine Back Squat",
    "Barbell Lunge",
    "Dumbbell Lunge",
    "Dumbbell Single Leg RDL",
    "Dumbbell Stiff Leg Deadlift",
    "Good Mornings",
    "Dumbbell Bulgarian Split Squat",
    "Barbell Stiff Leg Deadlift"
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
        <h1 className="show-title">Hamstrings Exercises</h1>
        <ul className="show-container-ul-left">
          {hamstringsExercises.map((exercise, index) => (
            <li key={index}>{exercise}</li>
          ))}
        </ul>
        </div>
      </div>
    </>
  );
};

export default Hamstrings;