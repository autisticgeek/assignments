const mongoose = require('mongoose')
const { Schema } = mongoose;

const PublishersSchema = new Schema({
    name:{type:String},
    location:{type:String}
})

const PublishersModel = mongoose.model("Publisher", PublishersSchema);
module.exports = PublishersModel;
