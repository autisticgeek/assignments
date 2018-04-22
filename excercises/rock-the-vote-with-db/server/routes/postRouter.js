const express = require('express');
const postRoute = express.Router()
const PostModel = require("../model/postModel")

postRoute.route("/")
    .get((req, res) => {
        PostModel.find(req.query, (err, foundposts) => {
            err ? res.status(200).send(err) : res.status(200).send(foundposts)
        })
    }
    )
    .post((req, res) => {
        const newFaction = new PostModel(req.body)
        newFaction.save((err, addedFaction) => err ? res.status(200).send(err) : res.status(201).send(addedFaction))
    })
postRoute.route("/:id")
.get((req, res) => {
    PostModel.findOne({ _id: req.params.id })
        .exec((err, foundPost) => {
            if (err) {
                res.status(200).send(err)
            } else if (foundPost) {
                res.status(200).send(foundPost)
            } else {
                res.status(404).send("Post Not found")
            }
        })
})
.delete((req, res) => {
    PostModel.findOneAndRemove({ _id: req.params.id })
    .exec(((err, delPost) => {
            if (err) {
                res.status(200).send(err)
            } else if (delPost) {
                res.status(204).send()
            } else {
                res.status(404).send("404 --- Post Not found")
            }
        }))
})
.put((req, res) => {
    PostModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .exec(((err, updatePost) => {
            if (err) {
                res.status(200).send(err)
            } else if (updatePost) {
                res.status(200).send(updatePost)
            } else {
                res.status(404).send("404 --- Post Not found")
            }
        }))
})

module.exports = postRoute