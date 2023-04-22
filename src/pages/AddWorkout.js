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
    category: '',
    youtubeVideo: ''
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/workouts', formData);
      setFormData({ workout: '', sets: '', reps: '', category: '', youtubeVideo: '' });
      fetchWorkouts();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (workout) => {
    setEditing(workout._id);
    setFormData({
      workout: workout.workout,
      sets: workout.sets,
      reps: workout.reps,
      category: workout.category,
      youtubeVideo: workout.youtubeVideo,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/workouts/${editing}`, formData);
      setEditing(null);
      setFormData({ workout: '', sets: '', reps: '', category: '', youtubeVideo: '' });
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
      {editing ? (
        <h2>Edit Workout</h2>
      ) : (
        <h2>Add Workout</h2>
      )}
      <form onSubmit={editing ? handleUpdate : handleSubmit} className="workout-form">
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
                   name="category"
                   placeholder="Category"
                   value={formData.category}
                   onChange={handleChange}
                   required
                   className="input-field"
                 />
            <input
                   type="text"
                   name="youtubeVideo"
                   placeholder="YouTube Video URL"
                   value={formData.youtubeVideo}
                   onChange={handleChange}
                   required
                   className="input-field"
                 /><button type="submit" className="submit-btn">
                 {editing ? 'Update Workout' : 'Add Workout'}
               </button>
               {editing && (
                 <button
                   type="button"
                   onClick={() => {
                     setEditing(null);
                     setFormData({ workout: '', sets: '', reps: '', category: '', youtubeVideo: '' });
                   }}
                   className="cancel-btn"
                 >
                   Cancel
                 </button>
               )}
               <Modal />
             </form>
             <div className="workout-list">
               <ul className='ul-From-List'>
                 {workouts.map((workout) => (
                   <li className='li-list' key={workout._id}>
                     <div className="workout-info">
                       <h3>{workout.workout}</h3>
                       <p>Sets: {workout.sets}</p>
                       <p>Reps: {workout.reps}</p>
                       <p>Category: {workout.category}</p>
                       {workout.youtubeVideo && (
                         <div className="video-wrapper">
                           <iframe
                             width="560"
                             height="315"
                             src={`https://www.youtube.com/embed/${extractVideoId(workout.youtubeVideo)}`}
                             title={workout.workout}
                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                             allowFullScreen
                           ></iframe>
                         </div>
                       )}
                     </div>
                     <div className="workout-actions">
                       <button onClick={() => handleEdit(workout)}>Edit</button>
                       <button onClick={() => handleDelete(workout._id)}>Delete</button>
                     </div>
                   </li>
                 ))}
               </ul>
             </div>
           </div>
           );
           };
           
           export default AddWorkout;