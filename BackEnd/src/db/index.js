import mongoose, { connect } from 'mongoose';
import {DB_NAME} from '../constants.js';


const connectDB = async () => {
    try{
        const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MOngoDB connected!! DB HOST: ${connectionInstance.connection.host} ${connectionInstance.connection.port}`);
    } catch(error){
        console.log("MongoDB connection ERROR: "+ error);
        process.exit(1);
    }
} 
export default connectDB;