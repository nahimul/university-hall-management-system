import mongoose from 'mongoose';    
 
const applicationSchema= new mongoose.Schema({
   result:{
        type:String,
        required:true
    },
    emergencyPerson:{
        type:String,
        required:true
    },
    emergencyContact:{
        type:String,
        required:true
    },
    details:{
        type:String,
        required:true
    },
    expectedDate:{
        type:String,
        required:true
    },
    docs:{
        type:String,
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Student'
    }
},{timestamps:true});

export const Application= mongoose.model('Application',applicationSchema);