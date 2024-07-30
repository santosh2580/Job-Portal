import express from "express";
import { updateUserController } from "../controllers/userController.js";
import authMiddleware from '../middlewares/authMiddleware.js'; // Correct path

//router object
const router = express.Router();

//routes
// GET USERS || GET

// UPDATE USER || PUT
router.put("/update-user", authMiddleware, updateUserController); // Use authMiddleware

export default router;
