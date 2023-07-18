const express = require("express");
const app = express();
require("dotenv").config();
const {userRouter , productRouter , orderRouter , categoryRouter} = require("./routers/index");
const { connect } = require("mongoose");
const port = process.env.PORT
const connectdb = require("./connectdb/connectdb");

app.use(express.json());

app.use("/api/v1/users" , userRouter);
app.use("/api/v1/product" , productRouter);
app.use("/api/v1/order" , orderRouter);
app.use("/api/v1/category" , categoryRouter);



const start = async () => {
    await connectdb();
    app.listen(port , () => {
        console.log(`Server is listening to port ${port} `)
    })
}
start();

