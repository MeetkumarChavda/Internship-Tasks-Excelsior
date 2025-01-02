import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const mongoDb = process.env.MONGO_URI;

export const connection = async ()=>{

    try {
        const conn = await mongoose.connect(mongoDb);
        console.log(`MongoDB connected on ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error in connctiong DB: ${error}`)
        process.exit(1);
        
    }
}
// Exit code 0 indicates that the operation was successful.
// Exit code 1 indicates a general error or failure
