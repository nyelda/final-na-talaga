const mongoose = require('mongoose')

const ExerDetailsSchema = new mongoose.Schema(
    {
        weight: String,
        height: String,
    },
    {
        collection: "ExerInfo",
    }
);

mongoose.model("ExerInfo", ExerDetailsSchema);