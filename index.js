const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");


const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");


const PORT = process.env.PORT || 8080;
dotenv.config();

mongoose.connect(process.env.MONGO_URL);

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);



app.listen(`${PORT}`, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});