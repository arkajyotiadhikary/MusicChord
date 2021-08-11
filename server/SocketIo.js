const SocketIo = (io) => {
    io.on("connection", (socket) => {
        console.log("we have new connection");
        socket.emit("welcome to server");
        socket.on("disconnect", () => {
            console.log("A user has left");
        });

        socket.on("Join", ({ name, room }, callback) => {
            console.log(name, room);

            // const error = true;
            // if (error) {
            //   callback({ error: "error" });
            // }
        });
    });
};

module.exports = SocketIo;
