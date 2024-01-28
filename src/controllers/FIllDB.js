const { User } = require('../db');
const data = require("../../data.json");

const fillDB = () => {
    data.forEach((user) => {
        User.findOrCreate({
            where: {
                FirstName: user.FirstName,
                LastName: user.LastName,
            },
            defaults: {
                Email: user.Email,
                LanguagePrefenrece: user.LanguagePreference

            }
        })
    });
}

module.exports = fillDB;