import React from "react";
import { Link } from "react-router-dom";

const CoreWorkout = () => {
  return (
    <div>
      <h1>Push Workout</h1>
      <ul>
        <li>
          <Link to="/workout/core/abdominal">Abdominals</Link>
        </li>
      </ul>
    </div>
  );
};

export default CoreWorkout;