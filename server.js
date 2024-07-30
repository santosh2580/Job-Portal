import express from 'express';
import 'express-async-errors';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';

// Import files
import connectDB from './config/db.js';

// Import routes
import testRoutes from './routes/testRoutes.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import jobRoutes from './routes/jobsRoutes.js'


// Import error handling middleware
import errorMiddleware from './middlewares/errorMiddleware.js';

// Load environment variables from .env file
dotenv.config();

// Ensure essential environment variables are set
if (!process.env.PORT || !process.env.NODE_ENV) {
  throw new Error('Environment variables PORT and NODE_ENV must be defined');
}

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
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/jobs', jobRoutes);

// Error handling middleware should be defined after the routes
app.use(errorMiddleware);

// Define the port
const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.bgCyan.white);
});
