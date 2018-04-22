
//requirements
const express = require("express");
const mongoose = require("mongoose");
const bp = require("body-parser");
const postRouter = require("./routes/postRouter");
const commentsRouter = require("./routes/commentsRouter");

//setting up the app
const app = express();
const PORT = 8080;

//middleware
app.use(bp.json());

//routes
app.use("/post", postRouter)
app.use("/comments", commentsRouter)

//Database connection and start server
mongoose.connect('mongodb://localhost:27017/votes');
app.listen(PORT, () => console.log(`Vote server running on ${PORT}`))