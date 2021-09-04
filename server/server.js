// import
const express = require("express");
const socketIO = require("socket.io");
const http = require("http");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");
const ss = require("socket.io-stream");
const expressSession = require("express-session");

// Import routes
const authRoutes = require("./Router/Auth");
// const userRoutes = require("./Router/User");
const musicRoutes = require("./Router/Music");

// initialization
dotenv.config();
mongoose.connect(process.env.DATABASE_URI, () => {
    console.log("Database conencted");
});

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
    cors: {
        origin: "localhost:3000",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true,
    },
});

// Socket io connection
io.on("connection", (socket) => {
    console.log("new client connected");
    if (typeof socket.handshake.name != "undefined") {
        user = {
            name: "arka",
        };
    }

    io.emit("connection");
    socket.on("message", (data) => {
        socket.broadcast.emit("client-message", data);
    });
    socket.on("disconnect", () => {
        io.emit("disconnection", null);
    });
    const clients = io.sockets.sockets;
    // const arr = [...clients].map(([name, value]) => ({ name, value }));
    console.log(clients);
});

const clients = io.sockets.adapter.rooms;
console.log(clients);
// console.log(io.sockets.clients());
// Express session keys
const sessionOptions = {
    secret: "This is a test",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true, sessionID: "", chatRoom: [] },
    chatRoom: [],
};

// middlewares
app.use(cors());
app.use(expressSession(sessionOptions));
app.use(express.json());
app.use("/auth", authRoutes);
// app.use("/user", userRoutes);
app.use("/music", musicRoutes);
const port = process.env.PORT || 8000;

server.listen(port, () => console.log(`server is running at ${port}`));
