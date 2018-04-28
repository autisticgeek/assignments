const express = require('express');
const downvoteRouter = express.Router()
const PostModel = require("../model/postModel")

downvoteRouter.route("/:id")
.get((req, res) => {
    const update = {$inc: {downvote: 1}};
    PostModel.findOneAndUpdate({ _id: req.params.id }, update, { new: true })
    .exec((err, updatePost) => {
            if (err) {
                res.status(500).send(err)
            } else if (updatePost) {
                res.status(200).send(updatePost)
            } else {
                res.status(404).send("404 --- Post Not found")
            }
        })
})



module.exports = downvoteRouter