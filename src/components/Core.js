import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const CoreWorkout = () => {
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
              <h1>Abs</h1>
            </div>
            <section className="slide-show">
              <img src="/assets/images/workout/abs3.png" alt="" />
              <img src="/assets/images/workout/abs -guy.png" alt="" />
              <img src="/assets/images/workout/abs4.png" alt="" />
            </section>
          <ul className="slide-show-links">
            <li>
              <Link to="/workout/core/abdominal">Abdominals</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CoreWorkout;

{/* <div>
      <h1>Push Workout</h1>
      <ul>
        <li>
          <Link to="/workout/legs/abdominal">Abdominals</Link>
        </li>
      </ul>
    </div> */}