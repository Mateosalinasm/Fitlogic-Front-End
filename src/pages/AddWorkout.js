import React, { useState } from 'react';
import axios from 'axios';

const AddWorkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    workout: '',
    reps: '',
    youtubeVideo: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/addWorkout', formData);
      setFormData({ name: '', workout: '', reps: '', youtubeVideo: '' });
      alert('Workout added successfully!');
    } catch (error) {
      console.error(error);
      alert('Error adding workout');
    }
  };

  return (
    <div className="add-workout">
      <h2>Add Workout</h2>
      <form onSubmit={handleSubmit} className="workout-form">
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="input-field" />
        <input type="text" name="workout" placeholder="Workout" value={formData.workout} onChange={handleChange} required className="input-field" />
        <input type="number" name="reps" placeholder="Reps" value={formData.reps} onChange={handleChange} required className="input-field" />
        <input type="text" name="youtubeVideo" placeholder="YouTube Video URL" value={formData.youtubeVideo} onChange={handleChange} required className="input-field" />
        <button type="submit" className="submit-btn">Add Workout</button>
      </form>
    </div>
  );
};

export default AddWorkout;
