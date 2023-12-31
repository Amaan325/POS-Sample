const express = require("express");
const app = express();
require("dotenv").config();

const mongoose = require("mongoose");

const routers = require("./routes/index");
const { connect } = require("mongoose");
const port = process.env.PORT
const connectdb = require("./connectdb/connectdb");

app.use(express.json());
const DB = process.env.DB;

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//   })
//   .then(() => console.log("DB connection successful!"));

app.use("/api/v1", require("./routes/index"));

const start = async () => {
    await connectdb();
    app.listen(port , () => {
        console.log(`Server is listening to port ${port} `)
    })
}
start();

