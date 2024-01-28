const { User } = require('../db');
const data = require('../../data.json');

const fillDB = async () => {
  try {
    for (const user of data) {
      await User.findOrCreate({
        where: {
          FirstName: user.FirstName,
        },
        defaults: {
          LastName: user.LastName,
          Email: user.Email,
          UserID: user.UserID,
          LanguagePreference: user.LanguagePreference,
        },
      });
    }

    console.log('Database filled successfully!');
  } catch (error) {
    console.error('Error filling the database:', error);
  }
};

module.exports = fillDB;