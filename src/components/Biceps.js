import React from "react";

const Biceps = () => {
  const bicepExercises = [
    "Dumbbell Bicep Curl",
    "Preacher Bicep Curl",
    "Barbell Bicep Curl",
    "Dumbbell Hammer Curl",
    "Reverse Curl"
  ];

  return (
    <div>
      <h1>Bicep Exercises</h1>
      <ul>
        {bicepExercises.map((exercise, index) => (
          <li key={index}>{exercise}</li>
        ))}
      </ul>
    </div>
  );
};

export default Biceps;
