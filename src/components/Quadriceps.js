import React from "react";

const Quadriceps = () => {
  const quadExercises = [
    "Barbell Front Squat",
    "Barbell Lunge",
    "Dumbbell Lunge",
    "Dumbbell Bulgarian Split Squat",
    "Barbell Forward Lunge",
    "Barbell Reverse Lunge",
    "Air Squat"
  ];

  return (
    <div>
      <h1>Quadriceps Exercises</h1>
      <ul>
        {quadExercises.map((exercise, index) => (
          <li key={index}>{exercise}</li>
        ))}
      </ul>
    </div>
  );
};

export default Quadriceps;