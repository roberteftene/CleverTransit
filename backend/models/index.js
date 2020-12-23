const { Sequelize } = require('./db.js');
let sequelize = require('./db.js');
const path = require('path')
const transportMethod = require(path.join(__dirname,'./MethodOfTransport.js'))(sequelize, Sequelize.DataTypes)
const TransportLine = require(path.join(__dirname, './TransportLine'))(sequelize, Sequelize.DataTypes)
const Review = require(path.join(__dirname,'./Review'))(sequelize, Sequelize.DataTypes)
module.exports = {
    sequelize,
    transportMethod,
    TransportLine,
    Review
}