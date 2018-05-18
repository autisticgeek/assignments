const mongoose = require('mongoose')
const { Schema } = mongoose;

const CommentSchema = new Schema({
    comment: { required: true, type: String },
    postID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post" }
    }, { timestamps: true });

const CommentModel = mongoose.model("comment", CommentSchema);
module.exports = CommentModel;
