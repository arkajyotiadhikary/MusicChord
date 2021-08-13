import React, { useEffect, useState } from "react";
import query_string from "query-string";
import socket_io_client from "socket.io-client";
import ScrollToBottom from "react-scroll-to-bottom";
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
                <div className="col-sm-3 col-xs-12">
                    <div
                        className={`col-inside-lg decor-default chat`}
                        tabIndex="5000"
                    >
                        <h6>Online</h6>
                        <div className="chat-users">
                            <User />
                        </div>
                    </div>
                </div>
                <div className="col-sm-9 col-xs-12 " tabindex="5001">
                    <h6>chat</h6>
                    <div className="col-inside-lg decor-default chat">
                        <div className="chat-body">
                            <div className="answer left">
                                <div className="avatar">
                                    <img
                                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                        alt="User name"
                                    />
                                    <div class="status offline"></div>
                                </div>
                                <div class="name">Alexander Herthic</div>
                                <div class="text">
                                    Lorem ipsum dolor amet, consectetur
                                    adipisicing elit Lorem ipsum dolor amet,
                                    consectetur adipisicing elit Lorem ipsum
                                    dolor amet, consectetur adiping elit
                                </div>
                                <div class="time">5 min ago</div>
                            </div>
                            <div class="answer right">
                                <div class="avatar">
                                    <img
                                        src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                        alt="User name"
                                    />
                                    <div class="status offline"></div>
                                </div>
                                <div class="name">Alexander Herthic</div>
                                <div class="text">
                                    Lorem ipsum dolor amet, consectetur
                                    adipisicing elit Lorem ipsum dolor amet,
                                    consectetur adipisicing elit Lorem ipsum
                                    dolor amet, consectetur adiping elit
                                </div>
                                <div class="time">5 min ago</div>
                            </div>
                            <div class="answer right">
                                <div class="avatar">
                                    <img
                                        src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                        alt="User name"
                                    />
                                    <div class="status offline"></div>
                                </div>
                                <div class="name">Alexander Herthic</div>
                                <div class="text">
                                    Lorem ipsum dolor amet, consectetur
                                    adipisicing elit Lorem ipsum dolor amet,
                                    consectetur adipisicing elit Lorem ipsum
                                    dolor amet, consectetur adiping elit
                                </div>
                                <div class="time">5 min ago</div>
                            </div>
                        </div>
                    </div>
                    <div class="answer-add">
                        <input placeholder="Write a message" />
                        <span class="answer-btn answer-btn-1"></span>
                        <span class="answer-btn answer-btn-2"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
