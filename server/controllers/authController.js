import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// =====================
// Signup Controller
// =====================
export const signup = async (req, res, next) => {
  try {
    const { fullName, email, phone, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
    if (existingUser) {
      const error = new Error('User with this email or phone already exists');
      error.status = 400;
      throw error;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new User({
      fullName,
      email,
      phone,
      password: hashedPassword,
    });

    await user.save();

    // Generate JWT with _id (not userId)
    const token = jwt.sign(
      { _id: user._id }, 
      process.env.JWT_SECRET, 
      { expiresIn: '1h' }
    );

    res.status(201).json({
      message: 'User created successfully',
      token,
      user: { id: user._id, fullName, email, phone },
    });
  } catch (error) {
    next(error);
  }
};

// =====================
// Login Controller
// =====================
export const login = async (req, res, next) => {
  try {
    const { identifier, password } = req.body;

    // Find user by email or phone
    const user = await User.findOne({
      $or: [{ email: identifier }, { phone: identifier }],
    });

    if (!user) {
      const error = new Error('Invalid credentials');
      error.status = 401;
      throw error;
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      const error = new Error('Invalid credentials');
      error.status = 401;
      throw error;
    }

    // Generate JWT with _id
    const token = jwt.sign(
      { _id: user._id }, 
      process.env.JWT_SECRET, 
      { expiresIn: '1h' }
    );

    res.status(200).json({
      message: 'Login successful',
      token,
      user: { id: user._id, fullName: user.fullName, email: user.email, phone: user.phone },
    });
  } catch (error) {
    next(error);
  }
};
