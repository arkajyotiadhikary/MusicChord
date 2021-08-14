import React, { useEffect, useState } from "react";
import query_string from "query-string";
import socket_io_client from "socket.io-client";
import Message from "./Message";
import User from "./User";
import "./Chat.css";

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
                <div className="d-flex flex-column justify-content-between h-100">
                    <div
                        className="card overflow-y-scroll"
                        style={{ height: "90vh" }}
                    >
                        <div className="card-body p-4">
                            <h6>Online</h6>
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
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                        </div>
                    </div>
                    <div className="card-footer d-flex bg-white border-0">
                        <input
                            className="form-control rounded-pill"
                            placeholder="Write a message"
                        />
                        <button className="btn btn-info text-light rounded-pill ms-1 answer-btn">
                            send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
