import React from "react";

const Glutes = () => {
  const glutesExercises = [
    "Barbell Deadlift",
    "Hex Bar Deadlift",
    "Barbell Back Squat",
    "Smith Machine Back Squat",
    "Barbell Hip Thrusts",
    "Machine Hip Thrusts",
    "Barbell Forward Lunge",
    "Barbell Reverse Lunge",
    "Air Squat",
    "Barbell Bench Press",
    "Incline Barbell Bench Press",
    "Dumbbell Flyes",
    "Cable Flyes",
    "Overhead Press",
    "Dumbbell Lateral Raise",
    "Cable Lateral Raise",
    "Barbell Bent Over Row",
    "Seated Cable Row",
    "Lat Pulldown",
    "Pullups",
    "Barbell Curl",
    "Preacher Curl",
    "Hammer Curl",
    "Cable Tricep Extension",
    "Skull Crusher",
    "Dumbbell Kickback",
    "Plank",
    "Side Plank",
    "Russian Twist",
    "Bicycle Crunches"
  ];

  return (
    <div>
      <h1>Glutes Exercises</h1>
      <ul>
        {glutesExercises.map((exercise, index) => (
          <li key={index}>{exercise}</li>
        ))}
      </ul>
    </div>
  );
};

export default Glutes;