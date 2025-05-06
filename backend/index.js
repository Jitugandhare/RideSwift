const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const connection = require("./config/db.js")



app.use(cors());


app.use(express.json());









const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    try {
        await connection;
        console.log(`Server is running on port ${PORT}`);
    } catch (error) {
        console.log(error)
    }
});