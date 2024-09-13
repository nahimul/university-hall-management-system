import mongoose from 'mongoose';

const complainBoxSchema= new mongoose.Schema({
    subject:{
        type:String,
        required:true,
        default: 'Complain'
    },
    complain:{
        type:String,
        required:true
    },
    // createdBy:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'Student'
    // }
},{timestamps:true});

export const ComplainBox= mongoose.model('ComplainBox',complainBoxSchema);