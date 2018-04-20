const mongoose = require('mongoose')
const { Schema } = mongoose;

const FactionSchema = new Schema({
    name: { required: true, type: String },
    location: { required: true, type: String }

})

const FactionModel = mongoose.model("faction", FactionSchema);
module.exports = FactionModel;


