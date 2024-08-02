//import mongoose from 'mongoose';
const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const noticesSchema = new Schema({
    title: {
        type:String,
        required:true,
    },
    date:  {
        type:String,
        required:true,
    },
    description:  {
        type:String,
        required:true,
    },
    uploadedFile: {
        type:String,//url
        required:true,
    },
},{timestamps:true});

//export const Notices = mongoose.model('Notices', noticesSchema);
const Notices = mongoose.model('Notices',noticesSchema);
module.exports = Notices;