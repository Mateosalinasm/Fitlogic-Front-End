import React from "react";

const LatissimusDorsi = () => {
  const latsExercises = [
    "Barbell Back Squat",
    "Smith Machine Back Squat"
  ];

  return (
    <div>
      <h1>LatissimusDorsi Exercises</h1>
      <ul>
        {latsExercises.map((exercise, index) => (
          <li key={index}>{exercise}</li>
        ))}
      </ul>
    </div>
  );
};

export default LatissimusDorsi;
