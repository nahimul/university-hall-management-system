import mongoose from 'mongoose';
const  Schema = mongoose.Schema;

const eventsSchema = new Schema({
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
    images: {
        type:String,//url
        required:true,
    }
},{timestamps:true});

export const Events = mongoose.model('Events', eventsSchema);
