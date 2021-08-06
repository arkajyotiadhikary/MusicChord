import React, { useEffect, useState } from "react";
import query_string from "query-string";
import socket_io_client from "socket.io-client";

let socket;
const ENDPOINT = "localhost:8000";

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  useEffect(() => {
    const { name, room } = query_string.parse(location.search);
    console.log(name, room);

    setName(name);
    setRoom(room);

    socket = socket_io_client(ENDPOINT, {
      withCredentials: true,
      extraHeaders: {
        "my-custom-header": "abcd",
      },
    });

    socket.emit("Join", { name, room }, ({ error }) => {
      window.alert(error);
    });

    console.log(socket);

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [location.search]);

  return <h1>Chat</h1>;
};

export default Chat;
