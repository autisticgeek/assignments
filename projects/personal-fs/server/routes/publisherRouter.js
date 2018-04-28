const express = require('express');
const publishersRoute = express.Router()
const PublishersModel = require("../models/publishersModel")

publishersRoute.route("/")


.get((req, res) => {
    console.log("publisherGet");
    PublishersModel.find(req.query)
    .exec((err, foundPublisher) => {
        if (err) {
            res.status(200).send(err)
        } else if (foundPublisher) {
            res.status(200).send(foundPublisher)
        } else {
            res.status(404).send("Publisher Not found")
        }
       
    })
}
)
.post((req, res) => {
    console.log("publisherPost", req.body);
    const newEntry = new PublishersModel(req.body)
    newEntry.save((err, addedEntry) => err ? res.status(200).send(err) : res.status(201).send(addedEntry))
})

publishersRoute.route("/:id")
    .get((req, res) => {
        PublishersModel.findOne({ _id: req.params.id })
            .exec((err, foundPublisher) => {
                if (err) {
                    res.status(200).send(err)
                } else if (foundPublisher) {
                    res.status(200).send(foundPublisher)
                } else {
                    res.status(404).send("Publisher Not found")
                }
            })
    })
    .delete((req, res) => {
        PublishersModel.findOneAndRemove({ _id: req.params.id })
            .exec(((err, delPublisher) => {
                if (err) {
                    res.status(200).send(err)
                } else if (delPublisher) {
                    res.status(204).send()
                } else {
                    res.status(404).send("404 --- Publisher Not found")
                }
            }))
    })
    .put((req, res) => {
        PublishersModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .exec(((err, updatePublisher) => {
                if (err) {
                    res.status(200).send(err)
                } else if (updatePublisher) {
                    res.status(200).send(updatePublisher)
                } else {
                    res.status(404).send("404 --- Publisher Not found")
                }
            }))
    })

module.exports = publishersRoute