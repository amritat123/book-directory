const bookController = require('../controller/book');
const express = require('express');
const router = express.Router();

router.get('/books', bookController.getBook);
router.post('/books', bookController.createBook);
router.put('/books/:id', bookController.updateBook);
router.delete('/books/:id', bookController.deleteBook);
router.get('/books/:id', bookController.getBookById);

module.exports = router;
