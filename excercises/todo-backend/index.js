const express = require('express');
const uuid = require("uuid")
const bp = require("body-parser")

const app = express();
const PORT = 8080;
let todo = require('./todo.js');

//middleware
app.use(bp.json())

//routes
app.route("/")
    .get((req, res) => {
        console.log(req.query)
        res.status(200).send(todo);
    }
    )
    .post((req, res) => {
       // console.log(req.body);
        const newData = req.body
        newData._id = uuid()
        todo.push(newData)
        res.status(201).send(newData)

    })

app.route("/:id")
    .get((req, res) => {
        console.log("/:id", req.params)
        const { id } = req.params
        const foundData = todo.filter(data => data._id === id)[0]
        res.status(200).send(foundData);
    })
    .delete((req, res) => {
        console.log("delete", req.params)
        const { id } = req.params
        todo = todo.filter(data => data._id !== id)
        res.status(204).send();
    })
    .put((req, res) => {
        console.log("put", req.params);
        const { id } = req.params;
        let editedData = req.body;
        todo = todo.map(obj => obj._id === id ? editedData = { ...obj, ...editedData } : obj);
        res.status(200).send(editedData)

    })

app.listen(PORT, () => console.log(`server running on ${PORT}`))