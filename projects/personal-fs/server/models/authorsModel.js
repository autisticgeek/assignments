const mongoose = require('mongoose')
const { Schema } = mongoose;

const AuthorSchema = new Schema({
    given_name: {type: String },
    family_name: { type: String },
}, {timestapms:true})

const AuthorModel = mongoose.model("Author", AuthorSchema);
module.exports = AuthorModel;
