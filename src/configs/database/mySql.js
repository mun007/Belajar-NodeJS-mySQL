var Sequelize = require('sequelize')
var db = new Sequelize(
    'nodedb',
    'munir',
    '1234',
    {
        dialect: 'mysql',
        host: 'localhost'
    }
);
// let coba = async function(){
//     try {
//         await db.authenticate();
//         console.log('Terkoneksi dengan database');
//     } catch (error) {
//         console.log('Unable to connect to the database :',error);
//     }
// }

// coba()
module.exports = db;  