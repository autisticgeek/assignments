const express = require('express');
const uuid = require("uuid")
const bp = require("body-parser")

const app = express();
const PORT = 8080;
let index = require('./index.js');

//middleware
app.use(bp.json())

//routes
app.route("/info")
    .get((req, res) => {
        console.log("NOid", req.params)
        res.status(200).send(index);
    }
    )
    .post((req, res) => {
        console.log(req.body);
        const newData = req.body
        newData._id = uuid()
        index.push(newData)
        res.status(201).send(newData)

    })

app.route("/info/:id")
    .get((req, res) => {
        console.log("id", req.params)
        const { id } = req.params
        const foundData = index.filter(data => data._id === id)[0]
        res.status(200).send(foundData);
    })
    .delete((req, res) => {
        console.log("delete", req.params)
        const { id } = req.params
        index = index.filter(data => data._id !== id)
        res.status(204).send();
    })
    .put((req, res) => {
        console.log("put", req.params);
        const { id } = req.params;
        let editedData = req.body;
        index = index.map(obj => obj._id === id ? editedData = { ...obj, ...editedData } : obj);
        res.status(200).send(editedData)

    })

app.listen(PORT, () => console.log(`server running on ${PORT}`))