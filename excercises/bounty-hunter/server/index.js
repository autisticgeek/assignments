const express = require('express');
const bp = require("body-parser")
const app = express();

const PORT = 8080;
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/bounty');
const factionRouter = require("./routes/faction")
const bountyRouter = require("./routes/bounty")

//middleware
app.use(bp.json())

//routes
app.use("/factions", factionRouter)
app.use("/bounty", bountyRouter)


app.listen(PORT, () => console.log(`Bounty server running on ${PORT}`))