const express = require('express');
const factionRoute = express.Router()
const factionsModel = require("../models/factionModel")

factionRoute.route("/")
    .get((req, res) => {
        factionsModel.find(req.query,(err, foundfactions) => {
            err ? res.status(200).send(err) : res.status(200).send(foundfactions)
        })
    }
    )
    .post((req, res) => {
        const newFaction = new factionsModel(req.body)
        newFaction.save((err, addedFaction) => err ? res.status(200).send(err) : res.status(201).send(addedFaction))
    })

    module.exports = factionRoute