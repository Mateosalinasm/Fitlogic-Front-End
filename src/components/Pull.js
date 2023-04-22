import React from "react";
import { Link } from "react-router-dom";

const PullWorkout = () => {
  return (
    <div>
      <h1>Pull Workout</h1>
      <ul>
        <li>
          <Link to="/workout/pull/latissimus-dorsi">Latissimus Dorsi</Link>
        </li>
        <li>
          <Link to="/workout/pull/trapezius">Trapezius</Link>
        </li>
        <li>
          <Link to="/workout/pull/biceps">Biceps</Link>
        </li>
      </ul>
    </div>
  );
};

export default PullWorkout;
