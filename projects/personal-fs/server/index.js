const express = require('express');
const mongoose = require('mongoose');
const bp = require('body-parser');
const morgan = require('morgan')
const authorRouter = require('./routes/authorsRoute')
const bookRouter = require('./routes/booksRouter')
const publisherRouter = require('./models/publisherModel')

const app = express();
const PORT = 8080;
app.use(bp.json());
app.use(morgan("dev"))

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/publisher", publisherRouter);
app.route("/")
    .get((req, res) => {
        res.status(400).send('You need a nown!')
    })


const databaseName = "Library";
mongoose.connect(`mongodb://localhost/${databaseName}`, err => {
    if (!err)
    console.log(`Connected to ${databaseName} database`)
});
app.listen(PORT, () => console.log(`${databaseName} server running on http://localhost:${PORT}`));