const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },

})

//static signup method
userSchema.statics.signup = async function (email, password) {

    //validation
    if(!email || !password) {
        throw Error('All fields are required!')
    }
    if(!validator.isEmail(email)){
        throw Error('Invalid Email!')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password is not strong enough!')
    }

    const exists = await this.findOne({ email })

    if (exists) {
        throw Error('User already exists!')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = bcrypt.hashSync(password, salt)

    const user = await this.create({ email, password: hash })

    return user
}

//static login method 
userSchema.statics.login = async function (email, password) {

    //validation
    if(!email || !password) {
        throw Error('All fields are required!')
    }
    if(!validator.isEmail(email)){
        throw Error('Invalid Email!')
    }

    const user = await this.findOne({ email })

    if(!user){
        throw Error('User does not exist!')  
    }

    const match = await bcrypt.compare(password, user.password)

    if(!match){
        throw Error('Invalid credentials!')
    }

    return user

}

module.exports = mongoose.model('User', userSchema)