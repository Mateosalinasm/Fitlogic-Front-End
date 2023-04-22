import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Abdominal = () => {
  const abdominalExercises = [
    "Plank",
    "Crunch",
    "Dead Bug",
    "Weighted Plank",
    "Cable Crunch",
    "Leg Raises",
    "Mountain Climbers",
    "Hanging Knee Raises",
    "Hanging Leg Raises",
    
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
          <Link to='/workout/core' onClick={() => window.scrollTo(0, 0)}>
            <img className="back" src="/assets/images/icons/back-arrow.png" alt="back arrow" />
          </Link>
        </motion.button>
        </div>
        <div className="parent-container">
          <div className="show-container">
            <h1 className="show-title">Abdominal Exercises</h1><br/>
            <ul className="show-container-ul-left">
              {abdominalExercises.map((exercise, index) => (
                <li key={index}>{exercise}</li>
              ))}
            </ul>
          </div>
      </div>
    </>
  );
};

export default Abdominal;