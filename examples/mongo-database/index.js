const express = require('express');
const bp = require("body-parser")
const app = express();

const PORT = 8080;
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/myDB');
const UsersModel = require("./Models/users")


//middleware
app.use(bp.json())

//routes
app.route("/users")
    .get((req, res) => {
        UsersModel.find(req.query,(err, foundUsers) => {
            err ? res.status(200).send(err) : res.status(200).send(foundUsers)
        })
    }
    )
    .post((req, res) => {
        const newUser = new UsersModel(req.body)
        newUser.save((err, addedUser) => err ? res.status(200).send(err) : res.status(201).send(addedUser))
    })

app.route("/users/:id")
    .get((req, res) => {
        UsersModel.findOne({ _id: req.params.id }, ((err, foundUser) => {
            if (err) {
                res.status(200).send(err)
            } else if (foundUser) {
                res.status(200).send(foundUser)
            } else {
                res.status(404).send("User Not found")
            }
        }))
    })
    .delete((req, res) => {
        UsersModel.findOneAndRemove({ _id: req.params.id }, ((err, delUser) => {
            if (err) {
                res.status(200).send(err)
            } else if (delUser) {
                res.status(204).send()
            } else {
                res.status(404).send("404 --- User Not found")
            }
        }))
    })
    .put((req, res) => {
        UsersModel.findOneAndUpdate({ _id: req.params.id }, req.body, {new:true}, ((err, updateUser) => {
            if (err) {
                res.status(200).send(err)
            } else if (updateUser) {
                res.status(200).send(updateUser)
            } else {
                res.status(404).send("404 --- User Not found")
            }
        }))
    })

app.listen(PORT, () => console.log(`MongoDB/mongoose server running on ${PORT}`))