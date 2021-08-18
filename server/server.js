// import built in dependencies
const express = require("express");
const socketIO = require("socket.io");
const http = require("http");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

// Import routes
const authRoutes = require("./Router/Auth");

// Initialize Dependencies
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
    socket.emit("connection", null);
});

// Use middlewares
app.use(express.json());
app.use("/auth", authRoutes);

const port = process.env.PORT || 8000;

server.listen(port, () => console.log(`server is running at ${port}`));
