import userModel from '../models/userModel.js';

export const registerController = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Validate
    if (!name) {
      return res.status(400).send('Name is required');
    }
    if (!email) {
      return res.status(400).send('Email is required');
    }
    if (!password || password.length < 6) {
      return res.status(400).send('Password is required and must be at least 6 characters');
    }

    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).send('Email already registered. Please login.');
    }

    // Create user
    const user = await userModel.create({ name, email, password });

    // Send response
    res.status(201).send(
      `User created successfully. Name: ${user.name}, Email: ${user.email}, Location: ${user.location}`
    );
  } catch (error) {
    next(error);
  }
};
