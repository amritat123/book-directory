require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const MONGO_CONFIG = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

mongoose
	.connect(
		'mongodb+srv://Amrita_Tiwari:Amrita_Tiwari@test.5zsdlgn.mongodb.net/title',
		MONGO_CONFIG
	)
	.then(() => {
		console.log('mongodb connected successfully....');
	})
	.catch(() => {
		console.log('mongodb disconnected sorry...');
	});
