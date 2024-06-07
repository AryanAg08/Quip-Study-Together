const express = require("express");
const app = express();
const mongo = require("mongoose");
const cookieParser = require("cookie-parser");
const path = require("path");
const port = 5001 || process.env.PORT;

app.post("/", async (req, res) => {
    res.send("Hello World!");
});

app.use(cookieParser('Secret'));

app.listen(port, async () => {
    console.log(`Server started on Port ${port}`);
});