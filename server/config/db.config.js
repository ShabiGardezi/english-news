import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/english-news';

export const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log(':) MongoDB connected');
    } catch (err) {
        console.error(":( Failed to connect to MONGODB");
        process.exit(1);
    }
};
