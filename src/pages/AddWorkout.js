import React, { useState } from 'react';
import axios from 'axios';

const AddWorkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    workout: '',
    reps: '',
    youtubeVideo: ''
  });

<<<<<<< HEAD
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
=======
    const [lists, setList] = useState(list)
    const [updateState, setUpdateState] = useState(-1)
    return(
        <div className='add-workout'>
            <div>
            <AddList setList = {setList }/>
            <form onSubmit={handleSubmit}>
            <table>
                {
                    lists.map((current) => (
                        updateState === current.id ? <EditList current={current} lists={lists} setList={setList}/> :
                        <tr>
                            <td>{current.name}</td>
                            <td>{current.workout}</td>
                            <td>{current.reps}</td>
>>>>>>> 665d17bb95c6641a4c99e55ef95f133261f5a6b7

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

<<<<<<< HEAD
export default AddWorkout;
=======
    }
    function handleSubmit(event) {

        event.preventDefault()

        const name = event.target.elements.name.value

        const workout = event.target.elements.workout.value

        const reps = event.target.elements.reps.value

        const newlist = lists.map((li) => (

            li.id === updateState ? {...li, name:name, workout: workout, reps: reps} : li
        ))

        setList(newlist)
        
        setUpdateState(-1)
    }
}

function EditList({current, lists, setList}) {

    function handInputname(event) {

        const value = event.target.value;

        const newlist = lists.map((li) => (

            li.id === current.id ? {...li, name :value} : li
        ))

        setList(newlist)
    }

    function handInputworkout(event) {

        const value = event.target.value;

        const newlist = lists.map((li) => (

            li.id === current.id ? {...li, workout :value} : li
        ))

        setList(newlist)
    }

    function handInputreps(event) {

      const value = event.target.value;

      const newlist = lists.map((li) => (

          li.id === current.id ? {...li, reps :value} : li
      ))

      setList(newlist)
  }
  
    return(
        <tr>
            <td><input type="text" onChange={handInputname} name='name' value={current.name}/></td>

            <td><input type="text" onChange={handInputworkout} name='workout' value={current.workout}/></td>
            
            <td><input type="number" onChange={handInputreps} name='reps' value={current.reps}/></td>


            <td><button type='submit'>Update</button></td>
        </tr>
    )
}

function AddList({setList}) {
    const nameRef = useRef()
    const workoutRef = useRef()
    const repsRef = useRef()

    function handleSubmit(event) {
        event.preventDefault();

        const name = event.target.elements.name.value;

        const workout = event.target.elements.workout.value;

        const reps = event.target.elements.reps.value;

        const newlist = {
          id: Math.floor(Math.random() * 1000000),
          name,
          workout,
          reps,
        };

        setList((prevList)=> {
            return prevList.concat(newlist)
        })

        nameRef.current.value = ""

        workoutRef.current.value = ""

        repsRef.current.value = ""

    }
    return(
        <div className="my-workout-form-container">
            <form className='addForm' onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" ref={nameRef}/>
                <input type="text" name="workout" placeholder="Workout" ref={workoutRef}/>
                <input type="text" name="reps" placeholder="reps" ref={repsRef}/>
            <button type="submit">Add</button>
        </form>
        </div>
        
    )
}

export default AddWorkout;
>>>>>>> 665d17bb95c6641a4c99e55ef95f133261f5a6b7
