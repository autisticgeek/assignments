const mongoose = require('mongoose')
const { Schema } = mongoose;

const BooksSchema = new Schema({
    isbn: { type: Number },
    isbn13: { type: String },
    title: { type: String },
    publication_year: { type: Number },
    author_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author"
    }],
    publisher_id: {
        type: mongoose.Schema.Types.ObjectId,
       // type: String,
        ref: "Publisher"
    }

}, {timestapms:true})

const BooksModel = mongoose.model("Book", BooksSchema);
module.exports = BooksModel;
