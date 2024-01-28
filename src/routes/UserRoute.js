// enrollment-service/src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Get all users
router.get('/user', UserController.getAllUsers);

// Get user by ID
router.get('/user/:firstName/:lastName', UserController.getUserByName);

// Create a new user
router.post('/user', UserController.createUser);

// Update user by ID
router.put('/user/:userId', UserController.updateUser);

// Delete user by ID
router.delete('/user/:userId', UserController.deleteUser);

module.exports = router;