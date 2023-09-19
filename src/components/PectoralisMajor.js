import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PectoralisMajor = () => {
  const pecsExercises = [
    "Barbell Back Squat",
    "Smith Machine Back Squat"
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
      <h1 className="show-title">Pectoralis Major Exercises</h1>
      <ul className="show-container-ul-2">
        {pecsExercises.map((exercise, index) => (
          <li key={index}>{exercise}</li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default PectoralisMajor;
