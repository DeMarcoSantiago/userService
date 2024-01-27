const { User } = require('../db');

// Controller functions for user actions
const getAllUsers = async () => {
    const users = await User.findAll();
    return users;
};


const getUserById = async (idUser) => {
    const usersById = await users.findByPk(iduser);
    return usersById;
};


const createUser = async (req, res) => { /* ... */ };


const updateUser = async (req, res) => { /* ... */ };
const deleteUser = async (req, res) => { /* ... */ };

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};