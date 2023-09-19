import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const LegsWorkout = () => {
  return (
    <div>
      <div className="push-parent-container">
        <div className="back-btn">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="menu-btn"
                onClick={() => null}
            > 
              <Link to='/workout' onClick={() => window.scrollTo(0, 0)}>
                  <img className="back" src="/assets/images/icons/back-arrow.png" alt="back arrow" />
              </Link>
            </motion.button>
        </div>
          <div className="push-container">
            <div className="push-title">
            <h1>Legs</h1>
            </div>
            <section className="slide-show">
              <img src="/assets/images/workout/legs6.png" alt="" />
              <img src="/assets/images/workout/legs3.png" alt="" />
              <img src="/assets/images/workout/legs1.png" alt="" />
            </section>
            <ul className="slide-show-links">
            <li>
              <Link to="/workout/legs/glutes">Glutes</Link>
            </li>
            <li>
              <Link to="/workout/legs/quadriceps">Quadriceps</Link>
            </li>
            <li>
              <Link to="/workout/legs/hamstring">Hamstring</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LegsWorkout;
