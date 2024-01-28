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


const createUser = async (req, res) => {
  console.log('Request Body:', req.body); // Log the request body

  const { FirstName, LastName, Email, LanguagePreference } = req.body;

  try {
    const newUser = await User.create({
      FirstName,
      LastName,
      Email,
      LanguagePreference,
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const updateUser = async (req, res) => {
  const { ID } = req.params; // Assuming the ID is in the URL params
  const { FirstName, LastName, Email, LanguagePreference } = req.body;

  try {
    // Check if the user exists
    const existingUser = await User.findByPk(ID);

    if (!existingUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update user information
    existingUser.FirstName = FirstName || existingUser.FirstName;
    existingUser.LastName = LastName || existingUser.LastName;
    existingUser.Email = Email || existingUser.Email;
    existingUser.LanguagePreference = LanguagePreference || existingUser.LanguagePreference;

    // Save the changes to the database
    await existingUser.save();

    res.json(existingUser);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const deleteUser = async (req, res) => {
  const { ID } = req.params; // Assuming the ID is in the URL params

  try {
    // Check if the user exists
    const existingUser = await User.findByPk(ID);

    if (!existingUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Delete the user from the database
    await existingUser.destroy();

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
module.exports = {
  getAllUsers,
  getUserByName,
  createUser,
  updateUser,
  deleteUser,
};