import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddWorkout = () => {
  const [workouts, setWorkouts] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    workout: '',
    reps: '',
    youtubeVideo: ''
  });

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const fetchWorkouts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/workouts');
      setWorkouts(response.data);
    } catch (error) {
      console.error(error);
      alert('Error fetching workouts');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/workouts', formData);
      setFormData({ name: '', workout: '', reps: '', youtubeVideo: '' });
      alert('Workout added successfully!');
      fetchWorkouts();
    } catch (error) {
      console.error(error);
      alert('Error adding workout');
    }
  };
  

  const handleUpdate = async (id, updatedData) => {
    try {
      await axios.put(`http://localhost:5000/workouts/${id}`, updatedData);
      alert('Workout updated successfully!');
      fetchWorkouts();
    } catch (error) {
      console.error(error);
      alert('Error updating workout');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/workouts/${id}`);
      alert('Workout deleted successfully!');
      fetchWorkouts();
    } catch (error) {
      console.error(error);
      alert('Error deleting workout');
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

      <h2>All Workouts</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Workout</th>
            <th>Reps</th>
            <th>YouTube Video URL</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((workout) => (
            <tr key={workout._id}>
              <td>{workout.name}</td>
              <td>{workout.workout}</td>
              <td>{workout.reps}</td>
              <td>{workout.youtubeVideo}</td>
          <td>
            <button onClick={() => handleUpdate(workout._id, { name: 'New Name' })}>Update</button>
            <button onClick={() => handleDelete(workout._id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
);
};

export default AddWorkout;