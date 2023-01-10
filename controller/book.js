const bookModel = require('../models/book');
require('../database/db');
require('dotenv');

const getBook = async (req, res) => {
	try {
		const book = await bookModel.find();
		res.status(200).json({
			message: 'Book found',
			data: book,
			status: true,
		});
	} catch (error) {
		res.status(500).json(error);
	}
};
const getBookById = async (req, res) => {
	try {
		const book = await bookModel.findById(req.params.id);
		res.status(200).json({
			message: book.title,
			data: book,
			id: book.id,
			response: true,
		});
	} catch (err) {
		res.status(500).json({
			message: 'SORRY! book not found by id',
			data: null,
			response: false,
		});
	}
};
const createBook = async (req, res) => {
	try {
		const { title, author, description } = bookModel(req.body);
		if (!(title && author && description)) {
			res.status(400).send('all are required');
		}
		// if book already exists, just return it
		const book = await bookModel.findOne({ title });
		if (book) {
			return res.status(409).send('book is already in directory');
		}
		// create a new book
		const newBook = new bookModel({
			title,
			author,
			description,
		});
		await newBook.save();
		res.status(201).json({
			message: 'Book created successfully ',
			status: true,
		});
	} catch (error) {
		res.status(400).json({
			message: 'sorry! book not created',
			response: 400,
		});
	}
};
const updateBook = async (req, res) => {
	try {
		const book = await bookModel.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.status(200).json({
			message: 'Book updated successfully',
			data: book,
			status: true,
			response: 200,
		});
	} catch (error) {
		res.status(500).json({
			message: 'oops!!! not updated',
			data: null,
			response: 500,
		});
	}
};

const deleteBook = async (req, res) => {
	try {
		const book = await bookModel.findByIdAndDelete(req.params.id);
		res.status(200).json({
			message: 'Book deleted',
			data: book,
			status: true,
		});
	} catch (error) {
		res.status(500).json({
			response: 500,
			message: 'book not deleted',
			status: false,
		});
	}
};

module.exports = {
	getBook,
	getBookById,
	createBook,
	updateBook,
	deleteBook,
};
