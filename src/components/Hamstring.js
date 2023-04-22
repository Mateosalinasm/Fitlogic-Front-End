import React from "react";

const Hamstrings = () => {
  const hamstringsExercises = [
    "Barbell Back Squat",
    "Smith Machine Back Squat",
    "Barbell Lunge",
    "Dumbbell Lunge",
    "Dumbbell Bulgarian Split Squat",
    "Dumbbell Single Leg RDL",
    "Dumbbell Stiff Leg Deadlift",
    "Barbell Stiff Leg Deadlift",
    "Good Mornings"
  ];

  return (
    <div>
      <h1>Hamstrings Exercises</h1>
      <ul>
        {hamstringsExercises.map((exercise, index) => (
          <li key={index}>{exercise}</li>
        ))}
      </ul>
    </div>
  );
};

export default Hamstrings;