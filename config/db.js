import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            // Ensure you have the correct environment variable in your .env file
        });
        console.log(`Connected to MongoDB database: ${conn.connection.host}`.bgMagenta.white);
    } catch (error) {
        console.log(`MongoDB error: ${error}`.bgCyan.white);
    }
};

export default connectDB;
