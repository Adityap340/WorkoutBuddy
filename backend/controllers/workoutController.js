const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

//get all workouts
const getWorkouts = async (req, res) => {

    const user_id = req.user._id

    const workouts = await Workout.find({ user_id }).sort({ createdAt: -1 })
    res.status(200).json(workouts)
}

//get single workout
const getWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid workout id' })
    }

    const workout = await Workout.findById(id)
    if (!workout) {
        return res.status(404).json({ error: 'Workout not found' })
    }
    res.status(200).json(workout)
}

//post new workout
const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body

    let emptyFields = []

    if (!title) {
        emptyFields.push('title')
    }
    if (!load) {
        emptyFields.push('load')
    }
    if (!reps) {
        emptyFields.push('reps')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({
            error: `Please fill in the following fields: ${emptyFields}`
        });
    }

    try {
        const user_id = req.user._id
        const workout = await Workout.create({ title, load, reps, user_id })
        res.status(200).json(workout)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

//delete workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid workout id' })
    }

    const workout = await Workout.findOneAndDelete({ _id: id })
    if (!workout) {
        return res.status(404).json({ error: 'Workout not found' })
    }
    res.status(200).json({ msg: 'Workout deleted' })
}

//update workout
const updateWorkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid workout id' })
    }

    const workout = await Workout.findOneAndUpdate({ _id: id }, {
        ...req.body
    })
    if (!workout) {
        return res.status(404).json({ error: 'Workout not found' })
    }
    res.status(200).json({ msg: 'Workout updated' })
}

module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}