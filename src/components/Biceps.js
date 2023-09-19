import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Biceps = () => {
  const bicepExercises = [
    "Dumbbell Bicep Curl",
    "Preacher Bicep Curl",
    "Barbell Bicep Curl",
    "Dumbbell Hammer Curl",
    "Reverse Curl"
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
          <h1 className="show-title">Bicep Exercises</h1>
          <ul className="show-container-ul">
            {bicepExercises.map((exercise, index) => (
              <li key={index}>{exercise}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Biceps;
