import express from 'express';
import { registerController } from '../controllers/authController.js';

// Route object
const router = express.Router();

// Define the /register route
router.post('/register', registerController);

// Export the router
export default router;
