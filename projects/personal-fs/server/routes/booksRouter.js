const express = require('express');
const booksRoute = express.Router()
const BooksModel = require("../models/booksModel")

booksRoute.route("/")
    .get((req, res) => {
        console.log(req.query);
        
        BooksModel.find(req.query)
           // .populate("publisher_id")
            .populate("author_id")
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
    .post((req, res) => {
        console.log("bookPost", req.body);
        const newEntry = new BooksModel(req.body)
        newEntry.save((err, addedEntry) => err ? res.status(200).send(err) : res.status(201).send(addedEntry))
    })

booksRoute.route("/:id")
    .get((req, res) => {
        BooksModel.findOne({ _id: req.params.id })
            .populate("publisher_id")
            .populate("author_id")
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
        BooksModel.findOneAndRemove({ _id: req.params.id })
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
        BooksModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .populate("publisher_id")
            .populate("author_id")
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

module.exports = booksRoute