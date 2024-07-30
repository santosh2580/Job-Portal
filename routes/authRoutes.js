import express from 'express';
import { registerController, loginController } from '../controllers/authController.js';

const router = express.Router();

// Define the /register route
router.post('/register', registerController);

// Define the /login route
router.post('/login', loginController);

export default router;
