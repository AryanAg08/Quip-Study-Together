require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http");
const cookieParser = require("cookie-parser");
const path = require("path");
const port = 5001 || process.env.PORT;
const { Server } = require("socket.io");
const cors = require("cors");
const mongoConnection = require("./utils/mongo");

mongoConnection();
app.use(express.json());

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
var userConnections = []; // afterwards change it to database format!!
io.on("connection", (socket) => {
  console.log("a user connected", socket.id);
  socket.on("userconnect", (data) => {
    console.log("userconnect", data);
    var other_users = userConnections.filter(
      (p) => p.meeting_id == data.meetingId
    );
    userConnections.push({
      connectionId: socket.id,
      user_id: data.displayName,
      meeting_id: data.meetingId,
    });

    other_users.forEach((v) => {
      socket.to(v.connectionId).emit("inform_others_about_me", {
        other_user_id: data.displayName,
        connId: socket.id,
      });
    });
  });

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  });
});

const authRouter = require("./routes/Auth");

app.use("/auth", authRouter);

const userRouter = require("./routes/User");
app.use("/user", userRouter);

app.post("/", async (req, res) => {
    res.send("Hello World!");
});

app.use(cookieParser('Secret'));


server.listen(port, async () => {
    console.log(`Server started on Port ${port}`);
});