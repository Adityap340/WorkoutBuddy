import { useState } from 'react';
import { useWorkoutContext } from '../hooks/useWorkoutContext';
import {useAuthContext} from '../hooks/useAuthContext';

function WorkoutForm() {
    const { dispatch } = useWorkoutContext();
    const { user } = useAuthContext();

    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!user) {
            setError('You must be logged in!');
            return
        }

        const workout = { title, load, reps };

        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        });
        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
            // Ensure json.emptyFields is an array before setting state
            setEmptyFields(Array.isArray(json.emptyFields) ? json.emptyFields : []);
        } else {
            setTitle('');
            setLoad('');
            setReps('');
            setError(null);
            setEmptyFields([]);
            alert('Workout added successfully!');
            console.log(json);
            dispatch({
                type: 'CREATE_WORKOUT',
                payload: json
            });
        }
    };

    return (
        <form className='create' onSubmit={handleSubmit}>

            <h3>Add a new workout</h3>

            <label>Exercise Title:</label>
            <input
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={emptyFields.includes('title') ? 'empty' : ''}
            />

            <label>Load (kg):</label>
            <input
                type='number'
                value={load}
                onChange={(e) => setLoad(e.target.value)}
                className={emptyFields.includes('load') ? 'empty' : ''}
            />

            <label>Reps:</label>
            <input
                type='number'
                value={reps}
                onChange={(e) => setReps(e.target.value)}
                className={emptyFields.includes('reps') ? 'empty' : ''}
            />

            <button type='submit'>Add Workout</button>
            {error && <div className='error'>{error}</div>}
        </form>
    );
}

export default WorkoutForm;
