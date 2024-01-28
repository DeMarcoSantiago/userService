const { User } = require('../db');

// Controller functions for user actions
const getAllUsers = async (req, res, next) => {
  try {
    // Your implementation to fetch all users
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

const getUserByName = async (req, res, next) => {
  try {
    const { firstName, lastName } = req.params;
    const user = await User.findOne({
      where: {
        FirstName: firstName,
        LastName: lastName,
      },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Handle the found user as needed
    res.json(user);
  } catch (error) {
    next(error);
  }
};


const createUser = async (req, res) => { /* ... */ };


const updateUser = async (req, res) => { /* ... */ };
const deleteUser = async (req, res) => { /* ... */ };

module.exports = {
  getAllUsers,
  getUserByName,
  createUser,
  updateUser,
  deleteUser,
};