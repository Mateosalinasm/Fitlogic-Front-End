import React from "react";

const Core = () => {
  const coreExercises = [
    "Plank",
    "Weighted Plank",
    "Crunch",
    "Cable Crunch",
    "Dead Bug",
    "Mountain Climbers",
    "Hanging Knee Raises",
    "Hanging Leg Raises",
    "Leg Raises"
  ];

  return (
    <div>
      <h1>Core Exercises</h1>
      <ul>
        {coreExercises.map((exercise, index) => (
          <li key={index}>{exercise}</li>
        ))}
      </ul>
    </div>
  );
};

export default Core;
