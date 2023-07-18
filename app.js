const express = require("express");
const app = express();
require("dotenv").config();
const {userRouter , productRouter , orderRouter , categoryRouter} = require("./routers/index");
const port = process.env.PORT


app.use("/api/v1/users" , userRouter);
app.use("/api/v1/product" , productRouter);
app.use("/api/v1/order" , orderRouter);
app.use("/api/v1/category" , categoryRouter);


app.listen(port , () => {
    console.log(`Server is listening to port ${port} `)
})