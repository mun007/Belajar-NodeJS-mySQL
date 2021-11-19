const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');

router.get('/', controller.book.getAll);
router.get('/search', controller.book.getSearch);
router.get('/:id',controller.book.getById);
router.post('/',controller.book.doSave);
router.put('/:id',controller.book.doUpdate);
router.delete('/:id',controller.book.doDelete);

module.exports = router;