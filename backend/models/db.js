const { Sequelize } = require('sequelize');
// let config = require('../config/config.json');

const sequelize = new Sequelize(
    'CleverTransit', 
    'root', 
    'password',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = sequelize;