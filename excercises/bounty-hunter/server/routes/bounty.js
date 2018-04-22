const express = require('express');
const bountyRoute = express.Router()
const BountyModel = require("../models/bountyModel")

bountyRoute.route("/")
    .get((req, res) => {
        const { query } = req
        console.log("query", query)
        BountyModel.find(req.query)
            .populate("factionID")
            .exec((err, foundBounty) => {
                err ? res.status(200).send(err) : res.status(200).send(foundBounty)
            })
    }
    )
    .post((req, res) => {
        const newBounty = new BountyModel(req.body)
        newBounty.save((err, addedBounty) => {
            if (err) {
                res.status(200).send(err)
            } else {
               // newBounty(addedBounty, {path:factionID}, populatedBounty)
                res.status(201).send(addedBounty)
            }
        })
    })

bountyRoute.route("/:id")
    .get((req, res) => {
        BountyModel.findOne({ _id: req.params.id })
            .populate("factionID")
            .exec((err, foundBounty) => {
                if (err) {
                    res.status(200).send(err)
                } else if (foundBounty) {
                    res.status(200).send(foundBounty)
                } else {
                    res.status(404).send("Bounty Not found")
                }
            })
    })
    .delete((req, res) => {
        BountyModel.findOneAndRemove({ _id: req.params.id })
            .populate("factionID")
            .exec(((err, delBounty) => {
                if (err) {
                    res.status(200).send(err)
                } else if (delBounty) {
                    res.status(204).send()
                } else {
                    res.status(404).send("404 --- Bounty Not found")
                }
            }))
    })
    .put((req, res) => {
        BountyModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .populate("factionID")
            .exec(((err, updateBounty) => {
                if (err) {
                    res.status(200).send(err)
                } else if (updateBounty) {
                    res.status(200).send(updateBounty)
                } else {
                    res.status(404).send("404 --- Bounty Not found")
                }
            }))
    })

module.exports = bountyRoute