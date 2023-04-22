import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '../components/Modal';




const AddWorkout = () => {
  const [workouts, setWorkouts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [formData, setFormData] = useState({
    workout: '',
    sets: '',
    reps: '',
    youtubeVideo: '',
    category: ''
  });

  const categories = ['push', 'pull', 'legs', 'core'];

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const fetchWorkouts = async () => {
    try {
      const response = await axios.get('http://localhost:4000/workouts');
      setWorkouts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEdit = (workout) => {
    setEditing(workout._id);
    setFormData({
      workout: workout.workout,
      sets: workout.sets,
      reps: workout.reps,
      youtubeVideo: workout.youtubeVideo,
      category: workout.category
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/workouts/${editing}`, formData);
      setEditing(null);
      setFormData({ workout: '', sets: '', reps: '', youtubeVideo: '', category: '' });
      fetchWorkouts();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/workouts/${id}`);
      fetchWorkouts();
    } catch (error) {
      console.error(error);
    }
  };

  const extractVideoId = (url) => {
    const regex = /(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
    const match = url.match(regex);
    if (match) {
      const parsedUrl = new URL(url);
      return parsedUrl.searchParams.get("v");
    }
    return null;
  };

  return (
  
  
    


    <div className="add-workout">
      <Modal fetchWorkouts={fetchWorkouts} />



      {editing && (
        <div className="edit-workout-form">
          <h2>Edit Workout</h2>
          <form onSubmit={handleUpdate} className="workout-form">
            <input
              type="text"
              name="workout"
              placeholder="Workout"
              value={formData.workout}
              onChange={handleChange}
              required
              className="input-field"
            />
            <input
              type="text"
              name="sets"
              placeholder="Sets"
              value={formData.sets}
              onChange={handleChange}
              required
              className="input-field"
            />
            <input
              type="text"
              name="reps"
              placeholder="Reps"
              value={formData.reps}
              onChange={handleChange}
              required
              className="input-field"
            />
            <input
              type="text"
              name="youtubeVideo"
              placeholder="YouTube Video URL"
              value={formData.youtubeVideo}
              onChange ={handleChange}
              className="input-field"
            />
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="input-field"
            >
              <option value="">Select category</option>
              
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <button type="submit" className="update-workouts">
              Update Workout
            </button>
          </form>
          <button onClick={() => setEditing(null)} className="cancel-edit-btn">
            Cancel
          </button>
        </div>
      )}

<div className="video-modal-container">
  <video className='video-myworkout' src="/assets/FitLogic-Myworkout.mp4"
    autoPlay
    loop
    muted>
  </video>

  <div className="modal-container">
  </div>
</div>

      <div className="workout-list">
        <ul className='new-workout-ul '>
        {workouts.map((workout) => (
  <li key={workout._id} className="workout-item">
    <div className="workout-info">
      <p>{workout.workout}</p>
      <p>{workout.sets}</p>
      <p>{workout.reps}</p>
      <p>{workout.category}</p>
      {workout.youtubeVideo && (
        <div className="video-wrapper">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${extractVideoId(workout.youtubeVideo)}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
    <div>
      <button className='workout-actions-edit' onClick={() => handleEdit(workout)}>Edit</button>
      <button className='workout-actions-delete' onClick={() => handleDelete(workout._id)}>Delete</button>
    </div>
  </li>
))}
        </ul>
      </div>
    </div>
    
  );
};

export default AddWorkout;