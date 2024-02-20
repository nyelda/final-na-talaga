const mongoose = require('mongoose')

const ExerDetailsSchema = new mongoose.Schema(
    {
        weight: number,
        height: number,
    },
    {
        collection: "ExerInfo",
    }
);

mongoose.model("ExerInfo", ExerDetailsSchema);