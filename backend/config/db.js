import mongoose from "mongoose";

const DB_URL = process.env.MONGODB_URL;

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
        });
        console.log(`MongoDB Connected: {conn.connection.host}`);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

export default connectDB;