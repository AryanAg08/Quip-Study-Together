import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import http from "http";
import socketConnection from "./socketConnection/socket.js";
const app = express();

app.use(
  cors({
    origin: [process.env.CLIENT_URL, "http://localhost:5174", "http://172.20.10.4"],
    credentials: true,
  })
);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use("/public", express.static("public"));

app.use(cookieParser());

const server = http.createServer(app);


import userRouter from "./routes/user.routes.js";
import router from "./routes/goals.routes.js";


app.use("/api/v1/users", userRouter);
app.use("/", router)

socketConnection(server);

export { app, server };