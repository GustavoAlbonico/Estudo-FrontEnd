const mongoose = require("mongoose");

const { Schema } = mongoose;

const { serviceSchema } = require("./Service");

const partySchema = new Schema({
    title: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    budget: {
        type: Number,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    services: {
        type: [serviceSchema],
    },
},
    { timestamps: true }
);

const Party = mongoose.model("Party", partySchema);

module.exports = Party;