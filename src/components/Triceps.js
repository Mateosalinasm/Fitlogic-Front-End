import React from "react";

const Triceps = () => {
  const tricepExercises = [
    "Chest Dip",
    "Dumbbell Overhead Tricep Extensions",
    "Cable Overhead Tricep Extensions",
    "Dumbbell Tricep Kickbacks",
    "Cable Tricep Kickbacks"
  ];

  return (
    <div>
      <h1>Triceps Exercises</h1>
      <ul>
        {tricepExercises.map((exercise, index) => (
          <li key={index}>{exercise}</li>
        ))}
      </ul>
    </div>
  );
};

export default Triceps;