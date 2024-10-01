import mongoose from 'mongoose';

const complainBoxSchema= new mongoose.Schema({
    subject:{
        type:String,
        required:true,
        default: 'Complain'
    },
    description:{
        type:String,
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Student'
    }
},{timestamps:true});

export const Complain= mongoose.model('Complain',complainBoxSchema);