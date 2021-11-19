const Sequelize = require('sequelize');
const db = require('../configs/database/mySql');

var publisher = db.define('publisher',
{
    Name: Sequelize.STRING,
    Address: Sequelize.STRING,
    Phone: Sequelize.INTEGER,
    Url: Sequelize.STRING
},{
    freezeTableName: true,
    timestamps: false
});

publisher.removeAttribute('id');
module.exports = publisher;