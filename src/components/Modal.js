import { useState } from "react";
import { motion } from 'framer-motion';
import axios from 'axios';

const Modal = ({ fetchWorkouts }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const closeModalOnOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  const [formData, setFormData] = useState({
    workout: '',
    sets: '',
    reps: '',
    youtubeVideo: '',
    category: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/workouts', formData);
      setFormData({ workout: '', sets: '', reps: '', youtubeVideo: '', category: '' });
      await fetchWorkouts();
      toggleModal();
    } catch (error) {
      console.error(error);
    }
  };

  const categories = ['push', 'pull', 'legs', 'core'];

  return (
    <>
      <div className="btn-modal-container">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.8 }}
          className="new-workout-btn"
        >
          <button onClick={toggleModal} className="req-btn log-in-btn">
            New Workout
          </button>
        </motion.button>
      </div>

      {modal && (
        <div className="modal">
          <div className="overlay" onClick={closeModalOnOverlayClick}>
            <div className="modal-content">
              <br />
              <h2>New Workout</h2>
              <form onSubmit={handleSubmit} className="workout-form">
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
                  onChange={handleChange}
                  required
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
                <button type="submit" className="add-workout-menu">
                  Add Workout
                </button>
              </form>
              <button onClick={toggleModal} className="req-btn close-modal">
                <img className="x" src="/assets/images/icons/cross.png" alt="x" />
              </button>
            </div>
          </div>
        </div>
            )}
                            </>
);


                        };

export default Modal;