const express = require("express");
const app = express();
require("dotenv").config();

const mongoose = require("mongoose");

const {userRouter , productRouter , orderRouter , categoryRouter} = require("./routers/index");
const port = process.env.PORT

const DB = process.env.DB;

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB connection successful!"));




app.use("/api/v1/users" , userRouter);
app.use("/api/v1/product" , productRouter);
app.use("/api/v1/order" , orderRouter);
app.use("/api/v1/category" , categoryRouter);


app.listen(port , () => {
    console.log(`Server is listening to port ${port} `)
})