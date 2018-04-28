const express = require('express');
const mongoose = require('mongoose');
const bp = require('body-parser');
const authorRouter = require('./routes/authorsRoute')
const bookRouter = require('./routes/booksRouter')
const publisherRouter = require('./models/publisherModel')

const app = express();
const PORT = 8080;
app.use(bp.json());

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/publisher", publisherRouter);
app.route("/")
    .get((req, res) => {
        res.status(400).send('You need a nown!')
    })



mongoose.connect('mongodb://localhost:27017/Library');
app.listen(PORT, () => console.log(`Library server running on http://localhost:${PORT}`));