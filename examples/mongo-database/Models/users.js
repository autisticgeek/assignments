const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({
    givenName: { required: true, type: String },
    familyName: { required: true, type: String },
    age: Number,
})

const UsersModel = mongoose.model("users", UserSchema);
module.exports = UsersModel;


