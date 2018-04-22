const express = require('express');
const commentRoute = express.Router()
const mongoose = require('mongoose');
const CommentModel = require("../model/commentModel")

commentRoute.route("/")
    .get((req, res) => {
        CommentModel.find(req.query, (err, foundcomments) => {
            err ? res.status(200).send(err) : res.status(200).send(foundcomments)
        })
    }
    )
    .post((req, res) => {
        const newComment = new CommentModel(req.body)
        newComment.save((err, addedComment) => err ? res.status(200).send(err) : res.status(201).send(addedComment))
    })
commentRoute.route("/:id")
.get((req, res) => {
    CommentModel.findOne({ _id: req.params.id })
        .exec((err, foundComment) => {
            if (err) {
                res.status(200).send(err)
            } else if (foundComment) {
                res.status(200).send(foundComment)
            } else {
                res.status(404).send("Comment Not found")
            }
        })
})
.delete((req, res) => {
    CommentModel.findOneAndRemove({ _id: req.params.id })
    .exec(((err, delComment) => {
            if (err) {
                res.status(200).send(err)
            } else if (delComment) {
                res.status(204).send()
            } else {
                res.status(404).send("404 --- Comment Not found")
            }
        }))
})
.put((req, res) => {
    CommentModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .exec(((err, updateComment) => {
            if (err) {
                res.status(200).send(err)
            } else if (updateComment) {
                res.status(200).send(updateComment)
            } else {
                res.status(404).send("404 --- Comment Not found")
            }
        }))
})

module.exports = commentRoute