import React from "react";

const Deltoids = () => {
  const deltExercises = [
    "Barbell Bench Press",
    "Dumbbell Bench Press",
    "Barbell Incline Bench Press",
    "Dumbbell Incline Bench Press",
    "Dumbbell Decline Bench Press",
    "Barbell Decline Bench Press",
    "Low Cable Chest Fly",
    "High Cable Chest Fly",
    "Dumbbell Arnold Press",
    "Dumbbell Front Raise"
  ];

  return (
    <div>
      <h1>Deltoids Exercises</h1>
      <ul>
        {deltExercises.map((exercise, index) => (
          <li key={index}>{exercise}</li>
        ))}
      </ul>
    </div>
  );
};

export default Deltoids;
