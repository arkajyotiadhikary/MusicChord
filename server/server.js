const express = require("express");
const socketIO = require("socket.io");
const http = require("http");
const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(router);

io.on("connection", (socket) => {
  console.log("we have new connection");
  socket.emit("welcome to server");
  socket.on("disconnection", () => {
    console.log("A user has left");
  });
});

const port = process.env.PORT || 8000;

server.listen(port, () => console.log(`server is running at ${port}`));
