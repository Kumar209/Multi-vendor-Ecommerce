const express = require("express");
const ErrorHandler = require("./utlis/ErrorHandler");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
// const cors = require("cors");

app.use(express.json());
app.use(cookieParser());
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true,
//   })
// );
// app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload({useTempFiles: true}));


//Config
if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({
        path:"backend/config/.env"
    })
}


//It's for Error Handling
app.use(ErrorHandler);

module.exports = app;