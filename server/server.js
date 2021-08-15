// import
const express = require("express");
const socketIO = require("socket.io");
const http = require("http");
const router = require("./router/Router");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

// Import routes
const authRoutes = require("./Router/Auth");

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
const SocketIo = require("./SocketIo")(io);

// middlewares
app.use(express.json());
app.use(cors());
app.use("/auth", authRoutes);

const port = process.env.PORT || 8000;

server.listen(port, () => console.log(`server is running at ${port}`));
