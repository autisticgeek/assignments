const express = require('express');
const authorsRoute = express.Router()
const AuthorsModel = require("../models/authorsModel")

authorsRoute.route("/")


.get((req, res) => {
    AuthorsModel.find(req.query)
    .exec((err, foundAuthor) => {
        if (err) {
            res.status(200).send(err)
        } else if (foundAuthor) {
            res.status(200).send(foundAuthor)
        } else {
            res.status(404).send("Author Not found")
        }
    })
}
)
.post((req, res) => {
    const newEntry = new AuthorsModel(req.body)
    newEntry.save((err, addedEntry) => err ? res.status(200).send(err) : res.status(201).send(addedEntry))
})

authorsRoute.route("/:id")
    .get((req, res) => {
        AuthorsModel.findOne({ _id: req.params.id })
            .exec((err, foundAuthor) => {
                if (err) {
                    res.status(200).send(err)
                } else if (foundAuthor) {
                    res.status(200).send(foundAuthor)
                } else {
                    res.status(404).send("Author Not found")
                }
            })
    })
    .delete((req, res) => {
        AuthorsModel.findOneAndRemove({ _id: req.params.id })
            .exec(((err, delAuthor) => {
                if (err) {
                    res.status(200).send(err)
                } else if (delAuthor) {
                    res.status(204).send()
                } else {
                    res.status(404).send("404 --- Author Not found")
                }
            }))
    })
    .put((req, res) => {
        AuthorsModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .exec(((err, updateAuthor) => {
                if (err) {
                    res.status(200).send(err)
                } else if (updateAuthor) {
                    res.status(200).send(updateAuthor)
                } else {
                    res.status(404).send("404 --- Author Not found")
                }
            }))
    })

module.exports = authorsRoute