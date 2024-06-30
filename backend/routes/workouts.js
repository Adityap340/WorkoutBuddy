const express = require('express')
const { createWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout } = require('../controllers/workoutController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

//rewuire authentication for all workout routes
router.use(requireAuth)

//getting all workouts
router.get('/', getWorkouts)

//getting single workout
router.get('/:id', getWorkout)

//POST new workout
router.post('/', createWorkout)

//delete new workout
router.delete('/:id', deleteWorkout)

//update new workout
router.patch('/:id', updateWorkout)

module.exports = router