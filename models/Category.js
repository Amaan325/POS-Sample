const mongoose = require("mongoose");


const Category = mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    }
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Category", Category);
