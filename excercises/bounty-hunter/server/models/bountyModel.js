const mongoose = require('mongoose')
const { Schema } = mongoose;

const BountySchema = new Schema({
    givenName: { required: true, type: String },
    familyName: { required: true, type: String },
    type: {
        required: true, type: String
    },
    living: {
        type: Boolean, default: true
    },
    bountyAmount: { type: Number },
    factionID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "faction"
    }

})

const BountyModel = mongoose.model("bounties", BountySchema);
module.exports = BountyModel;


