import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const Trapezius = () => {
  const trapsExercises = [
    "Dumbell Shoulder Press",
    "Barbell Shoulder Press",
    "Barbell Military Press",
    "Barbell Overhead Press",
    "Kettlebell Overhead Press",
    "Landmine Press",
    "Dead-Stop Seated Overhead Press",
    "Weighted 45 Degree Back Extensions",
    "45 Degree Back Extensions"
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
          <h1 className="show-title">Trapezius Exercises</h1>
          <ul className="show-container-ul">
            {trapsExercises.map((exercise, index) => (
              <li key={index}>{exercise}</li>
            ))}
          </ul>
        </div>
    </>
  );
};

export default Trapezius;