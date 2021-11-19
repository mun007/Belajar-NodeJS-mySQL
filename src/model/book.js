const Sequelize = require('sequelize');
const db = require('../configs/database/mySql');

var book = db.define('book', //'book' adalah nama table
{
    // Pendefinisian nama kolom beserta tipe data
    ISBN: Sequelize.STRING,
    Title: Sequelize.STRING,
    Author: Sequelize.STRING,
    Publisher: Sequelize.STRING,
    Year: Sequelize.INTEGER,
    Price: Sequelize.INTEGER,
    Category: Sequelize.STRING,
    Stock: Sequelize.INTEGER
},{
                            // Opsi dari sequelize
    freezeTableName: true, // 
    timestamps: false
});

book.removeAttribute('id');
module.exports = book;