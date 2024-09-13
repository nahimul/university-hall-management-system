import mongoose from 'mongoose';
const  Schema = mongoose.Schema;

const noticesSchema = new Schema({
    title: {
        type:String,
        trim:true,
        required:true,
    },
    description:  {
        type:String,
        trim:true,
        required:true,
    },
    date: {
        type:Date,
        default:Date.now,
    },
    upFile: {
        type:String,//url
        required:true,
    },
},{timestamps:true});

export const Notices = mongoose.model('Notices', noticesSchema);
