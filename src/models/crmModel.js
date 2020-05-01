import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const contactSchema = new Schema({
    firstName: {
        type: String,
        required: "Please enter a First Name"
    },
    lastName: {
        type: String,
        required: "Please enter a Last Name"
    },
    email: {
        type: String,
    },
    phone: {
        type: Number,
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})