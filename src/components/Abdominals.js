import React from "react";

const Abdominal = () => {
  const abdominalExercises = [
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
      <h1>Abdominal Exercises</h1>
      <ul>
        {abdominalExercises.map((exercise, index) => (
          <li key={index}>{exercise}</li>
        ))}
      </ul>
    </div>
  );
};

export default Abdominal;