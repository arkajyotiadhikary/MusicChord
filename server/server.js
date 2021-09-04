// import
const express = require("express");
const socketIO = require("socket.io");
const http = require("http");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

// Import routes
const authRoutes = require("./Router/Auth");
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
const userSocketIdMap = new Map();
let userList = [];

// add new user to the user list
const addClientToMap = (userName, socketId) => {
    if (!userSocketIdMap.has(userName)) {
        userSocketIdMap.set(userName, new Set([socketId]));
    } else {
        userSocketIdMap.get(userName).add(socketId);
    }
};

// remove user from the user list
const removeClientFromMap = (userName, socketID) => {
    if (userSocketIdMap.has(userName)) {
        let userSocketIdSet = userSocketIdMap.get(userName);
        userSocketIdSet.delete(socketID);
        if (userSocketIdSet.size == 0) {
            userSocketIdMap.delete(userName);
        }
    }
};

io.on("connection", (socket) => {
    let userName = socket.handshake.query.userName;
    addClientToMap(userName, socket.id);
    userList = [...userSocketIdMap.keys()];
    io.emit("connection", userList);

    socket.on("message", (data) => {
        socket.broadcast.emit("client-message", data);
    });
    socket.on("disconnect", () => {
        removeClientFromMap(userName, socket.id);
        console.log("User List ", userSocketIdMap);
        io.emit("disconnection", userList);
    });
});

// middlewares
app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/music", musicRoutes);
const port = process.env.PORT || 8000;

server.listen(port, () => console.log(`server is running at ${port}`));
