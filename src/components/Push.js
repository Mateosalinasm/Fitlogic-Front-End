import React from "react";
import { Link } from "react-router-dom";

const PushWorkout = () => {
  return (
    <div>
      <h1>Push Workout</h1>
      <ul>
        <li>
          <Link to="/workout/push/pectoralis-major">Pectoralis Major</Link>
        </li>
        <li>
          <Link to="/workout/push/deltoids">Deltoids</Link>
        </li>
        <li>
          <Link to="/workout/push/triceps">Triceps</Link>
        </li>
      </ul>
    </div>
  );
};

export default PushWorkout;
