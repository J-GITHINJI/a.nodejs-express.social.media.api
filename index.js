const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const helmet = require("helmet")
const morgan = require("morgan")


const PORT = process.env.PORT || 8080;
dotenv.config()

mongoose.connect(process.env.MONGO_URL);

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.get('/', (req, res) => {
    res.send("Welcome to home page")
})


app.listen(`${PORT}`, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});