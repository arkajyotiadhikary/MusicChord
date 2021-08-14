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
        <div className="content container-fluid bootstrap snippets bootdey h-100">
            <div className="row row-broken">
                <div className="col-sm-3 col-xs-12 overflow-auto">
                    <div className="card">
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
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-9 col-xs-12 " tabindex="5001">
                    <h6>chat</h6>
                    <div className="col-inside-lg decor-default chat">
                        <div className="chat-body">
                            <div className="answer left">
                                <Message />
                            </div>
                            <div class="answer right">
                                <Message />
                            </div>
                            <div class="answer right">
                                <Message />
                            </div>
                        </div>
                    </div>
                    <div class="d-flex answer-add">
                        <input placeholder="Write a message" />
                        <button className="btn  ms-1 answer-btn">send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
