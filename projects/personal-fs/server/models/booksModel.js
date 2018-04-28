const mongoose = require('mongoose')
const { Schema } = mongoose;

const BooksSchema = new Schema({
    isbn: { type: String },
    isbn13: { type: String },
    title: { type: String },
    publication_year: { type: Number },
    author_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author"
    }],
    publisher_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Publisher"
    }

})

const BooksModel = mongoose.model("Book", BooksSchema);
module.exports = BooksModel;
