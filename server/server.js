const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const cors = require("cors");
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

// NOTE retriving current channels informations
app.get("/getChannels", (req, res) => {
  res.json({ channels: STATIC_CHANNELS });
});

const port = 8000;

io.on("connection", (socket) => {
  socket.emit("connection", null);
  console.log("New user connected");
});

server.listen(port, () => {
  console.log(`server is runnin at ${port}`);
});
