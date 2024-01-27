// enrollment-service/src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Get all users
router.get('/users', UserController.getAllUsers);

// Get user by ID
router.get('/users/:userId', UserController.getUserById);

// Create a new user
router.post('/users', UserController.createUser);

// Update user by ID
router.put('/users/:userId', UserController.updateUser);

// Delete user by ID
router.delete('/users/:userId', UserController.deleteUser);

module.exports = router;