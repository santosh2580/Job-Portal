import mongoose from "mongoose";
import validator from "validator";

// Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true,
        validate: [validator.isEmail, 'Invalid email format']
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    location: {
        type: String,
        default: 'Nepal'
    }
}, { timestamps: true });

// Hash password


export default mongoose.model('User', userSchema);
