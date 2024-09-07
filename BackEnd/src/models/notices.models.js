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
    // uploadedFile: {
    //     type:String,//url
    //     required:true,
    // },
},{timestamps:true});

export const Notices = mongoose.model('Notices', noticesSchema);
