import React, { useEffect, useState } from "react";
import query_string from "query-string";
import socket_io_client from "socket.io-client";
import Message from "./Message";
import User from "./User";
import "./Chat.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

let socket;
const ENDPOINT = "localhost:8000";

const Chat = ({ location }) => {
    // const [name, setName] = useState("");
    // const [room, setRoom] = useState("");

    // useEffect(() => {
    //     const { name, room } = query_string.parse(location.search);
    //     console.log(name, room);

    //     setName(name);
    //     setRoom(room);

    //     socket = socket_io_client(ENDPOINT, {
    //         withCredentials: true,
    //         extraHeaders: {
    //             "my-custom-header": "abcd",
    //         },
    //     });

    //     socket.emit("Join", { name, room }, ({ error }) => {
    //         window.alert(error);
    //     });

    //     console.log(socket);

    //     return () => {
    //         socket.emit("disconnect");
    //         socket.off();
    //     };
    // }, [location.search]);

    return (
        <div className="row">
            <div className="col-xs-12 col-sm-3">
                <div className="d-flex flex-column justify-content-between h-100 bg-light shadow">
                    <h6 className="text-center p-2">Online</h6>
                    <div className="card border-0 online-users bg-light">
                        <div className="card-body p-4">
                            <div className="chat-users text-center">
                                <User />
                                <User />
                                <User />
                                <User />
                                <User />
                                <User />
                                <User />
                                <User />
                                <User />
                                <User />
                                <User />
                                <User />
                                <User />
                                <User />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xs-12 col-sm-9">
                <div className="d-flex flex-column justify-content-between h-100">
                    <div className="card border-0 chat overflow-y-scroll">
                        <div className="card-body chat-body">
                            <h6>chat</h6>
                            <Message sender="server" />
                            <Message sender="me" />
                            <Message sender="me" />
                            <Message sender="server" />
                            <Message sender="server" />
                            <Message sender="server" />
                            <Message sender="me" />
                            <Message sender="server" />
                            <Message sender="server" />
                            <Message sender="me" />
                        </div>
                    </div>
                    <div className="card-footer d-flex bg-white border-0">
                        <input
                            className="form-control rounded-pill"
                            placeholder="Write a message"
                            autoFocus
                        />
                        <button className="btn rounded-pill ms-3 answer-btn">
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
