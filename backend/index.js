const express = require("express");
const app = express();
const mongo = require("mongoose");
const http = require("http");
const cookieParser = require("cookie-parser");
const path = require("path");
const port = 5001 || process.env.PORT;
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  },
});

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  });
});

app.post("/", async (req, res) => {
    res.send("Hello World!");
});

app.use(cookieParser('Secret'));


server.listen(port, async () => {
    console.log(`Server started on Port ${port}`);
});