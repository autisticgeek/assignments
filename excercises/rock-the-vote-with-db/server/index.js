
//requirements
const express = require("express");
const mongoose = require("mongoose");
const bp = require("body-parser");
const postRouter = require("./routes/postRouter");
const commentsRouter = require("./routes/commentsRouter");
const downvoteRouter = require("./routes/downvoteRouter");
const upvoteRouter = require("./routes/upvoteRouter");

//setting up the app
const app = express();
const PORT = 8080;

//middleware
app.use(bp.json());

//routes
app.use("/post", postRouter)
app.use("/comments", commentsRouter)
app.use("/downvote", downvoteRouter)
app.use("/upvote", upvoteRouter)

//Database connection and start server
mongoose.connect('mongodb://localhost:27017/votes');
app.listen(PORT, () => console.log(`Vote server running on ${PORT}`))