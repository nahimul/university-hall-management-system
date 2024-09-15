import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
    {
        name: {
        type: String,
        trim: true,
        required: true,
        },
        email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true,
        },
        phone: {
        type: String,
        trim: true,
        required: true,
        },
        dob:{
        type: String,
        },
        avatar: {
        type: String,
        },
    },
    { timestamps: true }
    );

   export const Employee = mongoose.model('Employee', employeeSchema);