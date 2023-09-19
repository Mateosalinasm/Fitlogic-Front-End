import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";



const LatissimusDorsi = () => {
  const latsExercises = [
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
                    <Link to='/workout/pull' onClick={() => window.scrollTo(0, 0)}>
                        <img className="back" src="/assets/images/icons/back-arrow.png" alt="back arrow" />
                    </Link>
                </motion.button>
            </div>
    <div className="parent-container">
      <div className="show-container">
        <h1 className="show-title">LatissimusDorsi Exercises</h1>
        <ul className="show-container-ul-2">
          {latsExercises.map((exercise, index) => (
            <li key={index}>{exercise}</li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
};

export default LatissimusDorsi;
