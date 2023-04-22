import React from "react";
import { Link } from "react-router-dom";

const LegsWorkout = () => {
  return (
    <div>
      <h1>Leg Workout</h1>
      <ul>
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
  );
};

export default LegsWorkout;
