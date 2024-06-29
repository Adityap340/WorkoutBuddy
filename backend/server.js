const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')
const app = express();

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/workouts', workoutRoutes)
app.use('/api/users', userRoutes)
//connect to mongodb
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        //listen to req once connection is established
        app.listen(process.env.PORT, () => {
            console.log('Server listneing on port', process.env.PORT)
            console.log("connection to mongodb established")
        });
        
    })
    .catch((err) => {
        console.log("error connecting to mongodb", err)
    }
    )

