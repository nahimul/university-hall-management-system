import mongoose from 'mongoose';

const DB_NAME="testy";
const connectDB=async ()=>{
    try{
        
        const connectionInstanse= await mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`);
        console.log(`MongoDB connected !! DB HOST: ${connectionInstanse.connection.host}`);
    }
    catch(error){
        console.log("MONGODB connection FAILED ", error);
        process.exit(1);
    }
}

export default connectDB;

