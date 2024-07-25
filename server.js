import express from 'express';
import "express-async-errors";
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';

// Import files
import connectDB from './config/db.js';

// Import routes
import testRoutes from './routes/testRoutes.js';
import authRoutes from './routes/authRoutes.js';
import errorMiddleware from './middlewares/errorMiddleware.js';

// Load environment variables from .env file
dotenv.config();

// Connect to the database
connectDB();

// Initialize express app
const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Define routes
app.use('/api/v1/test', testRoutes);
app.use('/api/v1/auth', authRoutes);

// Error handling middleware should be defined after the routes
app.use(errorMiddleware);

// Define the port
const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running in ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
});
