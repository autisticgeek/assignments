
//requirements
const express = require("express");
const mongoose = require("mongoose");
const bp = require("body-parser");
const morgan = require("morgan")
const { Schema } = mongoose;

const BookSchema = new Schema({
    title: { required: true, type: String },
    description: { type: String },
    publisher: { type: String },
    authorFName: { type: String },
    authorLName: { type: String },
    isbn: { type: Number },
    year: { type: Number }
})

const BookModel = mongoose.model("book", BookSchema);


//setting up the app
const app = express();

const PORT = 8080;

//middleware
app.use(bp.json());
app.use(morgan("dev"))

//routes
app.route("/books")
    .get((req, res) => {
        BookModel.find(req.query)
            .exec((err, foundBook) => {
                if (err) {
                    res.status(500).send(err)
                } else if (foundBook) {
                    res.status(200).send(foundBook)
                } else {
                    res.status(404).send("Book Not found")
                }
            })
    })
    .post((req, res) => {
        const newEntry = new BookModel(req.body)
        newEntry.save((err, addedEntry) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(200).send(addedEntry)
            }
        })
    })
app.route("/books/:id")
    .get((req, res) => {
        BookModel.findOne({ _id: req.params.id })
            .exec((err, foundBook) => {
                if (err) {
                    res.status(200).send(err)
                } else if (foundBook) {
                    res.status(200).send(foundBook)
                } else {
                    res.status(404).send("Book Not found")
                }
            })
    })
    .delete((req, res) => {
        BookModel.findOneAndRemove({ _id: req.params.id })
            .exec(((err, delBook) => {
                if (err) {
                    res.status(200).send(err)
                } else if (delBook) {
                    res.status(204).send()
                } else {
                    res.status(404).send("404 --- Book Not found")
                }
            }))
    })
    .put((req, res) => {
        BookModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .exec(((err, updateBook) => {
                if (err) {
                    res.status(200).send(err)
                } else if (updateBook) {
                    res.status(200).send(updateBook)
                } else {
                    res.status(404).send("404 --- Book Not found")
                }
            }))
    })

//data connection and start the server
mongoose.connect('mongodb://localhost/books', err => {
    if (!err)
        console.log('Conected to books!')
});//from DB
app.listen(PORT, () => console.log(`books server running on ${PORT}`))