const express = require("express");
// const ErrorHandler = require("./utils/ErrorHandler");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const user = require("./controller/user");

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);

app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true }));


//Config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path: "backend/config/.env"
    })
}

//Import routes


app.use("/api/v2/user", user);


//It's for Error Handling
// app.use(ErrorHandler);

module.exports = app;