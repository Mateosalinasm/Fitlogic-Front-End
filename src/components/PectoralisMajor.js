import React from "react";

const PectoralisMajor = () => {
  const pecsExercises = [
    "Barbell Back Squat",
    "Smith Machine Back Squat"
  ];

  return (
    <div>
      <h1>Pectoralis Major Exercises</h1>
      <ul>
        {pecsExercises.map((exercise, index) => (
          <li key={index}>{exercise}</li>
        ))}
      </ul>
    </div>
  );
};

export default PectoralisMajor;
