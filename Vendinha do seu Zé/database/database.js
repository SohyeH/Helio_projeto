const Sequelize = require("sequelize");

const connection = new Sequelize('samara',
'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;