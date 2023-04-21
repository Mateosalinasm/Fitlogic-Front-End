import React, { useRef, useState } from 'react'
import Modal from '../components/Modal'

function AddWorkout() {
    const list = [
        {
            id: 1, 
            name: "Sara",
            workout: "pushup",
            reps: 12
        },
        {
            id: 2, 
            name: "john",
            workout: "whatever",
            reps: 12
        },
    ]

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

                            <td>

                                <button className='edit' onClick={() => handleEdit(current.id)}>Edit  workout</button>

                                <button className='delete' type='button' onClick={() => handleDelete(current.id)}>Delete workout</button>
                            </td>
                        </tr>
                    ))
                }
            </table>
            </form>
            </div>
        </div>
    )

    function handleEdit(id) {
        setUpdateState(id)
        
    }
    function handleDelete(id) {

        const newlist = lists.filter((li) => li.id !== id)
        setList(newlist)

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
            
        <Modal>
            <form className='addForm' onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" ref={nameRef}/>
                <input type="text" name="workout" placeholder="Workout" ref={workoutRef}/>
                <input type="text" name="reps" placeholder="reps" ref={repsRef}/>
                <button type="submit">Add</button> 
            </form>
        </Modal>
        </div>
        
    )
}

export default AddWorkout;