import mongoose from 'mongoose';
const  Schema = mongoose.Schema;

const noticesSchema = new Schema({
    title: {
        type:String,
        trim:true,
        required:true,
    },
    time: {
        type:String,
        required:true,
        trim:true,
    },
    date:{
        type:String,
        required:true,
        trim:true,
    },
    description:  {
        type:String,
        trim:true,
        required:true,
    },
    upFile: {
        type:String,//url
        required:true,
    },
},{timestamps:true});

export const Notices = mongoose.model('Notices', noticesSchema);
