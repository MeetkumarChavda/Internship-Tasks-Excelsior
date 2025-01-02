import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const url = process.env.MONGO_URI;

export const connection = async ()=>{

    try {
        const conn = await mongoose.connect(url);
        console.log(`MongoDB connected on ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error in connctiong DB: ${error}`)
        process.exit(1);
        
    }
}