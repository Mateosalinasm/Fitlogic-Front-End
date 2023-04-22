import React from "react";

const Trapezius = () => {
  const trapsExercises = [
    "Dumbell Shoulder Press",
    "Barbell Shoulder Press",
    "Barbell Military Press",
    "Barbell Overhead Press",
    "Kettlebell Overhead Press",
    "Landmine Press",
    "Dead-Stop Seated Overhead Press",
    "Weighted 45 Degree Back Extensions",
    "45 Degree Back Extensions"
  ];

  return (
    <div>
      <h1>Trapezius Exercises</h1>
      <ul>
        {trapsExercises.map((exercise, index) => (
          <li key={index}>{exercise}</li>
        ))}
      </ul>
    </div>
  );
};

export default Trapezius;