const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.CONNECTION_STRING;

const connectdb = async () => {
    try {
        await mongoose.connect(url,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
        console.log("Connected to the Database");
    }
    catch (err) {
        console.log("Some error occurred");
    }
}

module.exports = connectdb;
