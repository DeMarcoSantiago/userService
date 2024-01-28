// enrollment-service/src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const { User } = require('../db');

// Get all users
router.get('/user', UserController.getAllUsers);

// Get user by ID
router.get('/user/:id', async (req, res) => {
    const userId = parseInt(req.params.id, 10);
  
    try {
      const user = await User.findOne({ where: { ID: userId } });
  
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error fetching user by ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

// Get user by name
router.get('/user/:firstName/:lastName', UserController.getUserByName);

// Create a new user
router.post('/user', UserController.createUser);

// Update user by ID
router.put('/user/:ID', UserController.updateUser);

// Delete user by ID
router.delete('/user/:ID', UserController.deleteUser);

module.exports = router;