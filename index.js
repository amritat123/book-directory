require('dotenv').config();
const express = require('express');
const dbConnection = require('./database/db');
const app = express();

app.use(express.json());
app.use(require('./routes/book'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`server listening on port ${PORT}`), dbConnection);
