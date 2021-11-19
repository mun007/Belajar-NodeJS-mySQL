const book = require ('./book');
const publisher = require('./publisher');
const controller = {};

controller.book = book;
controller.publisher = publisher;
module.exports = controller;


// module.exports = {
//     book
// };