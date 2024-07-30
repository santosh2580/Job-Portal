import express from 'express';
import { registerController, loginController } from '../controllers/authController.js';
import rateLimit from 'express-rate-limit'

//ip limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  });
  

const router = express.Router();

// Define the /register route
router.post('/register', registerController);

// Define the /login route
router.post('/login', loginController);

export default router;
