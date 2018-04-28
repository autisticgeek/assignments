const mongoose = require('mongoose')
const { Schema } = mongoose;

const PostSchema = new Schema({
    title: { required: true, type: String },
    description: { type: String },
    upvote:{type:Number, default:0},
    downvote:{type:Number, default:0}

})

const PostModel = mongoose.model("post", PostSchema);
module.exports = PostModel;
