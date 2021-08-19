import React, { useState, useEffect } from "react";
// import query_string from "query-string";
import { io } from "socket.io-client";
import Message from "./Message";
import User from "./User";
import "./Chat.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

// TODO why only * is working?
const ENDPOINT = "localhost:8000";

const Chat = () => {
    const [messages, setMessages] = useState([]);

    // NOTE send messge after new user join
    const socketClient = io(ENDPOINT, {
        transports: ["websocket"],
        withCredentials: true,
        extraHeaders: {
            "my-custom-header": "abcd",
        },
    });
    useEffect(() => {
        socketClient.on("connection", () => {
            const newObj = {
                message: "New user has joined",
                data: null,
            };

            setMessages((messages) => [...messages, newObj]);
        });
    }, []);

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
                        <div className="card-body chat-body" id="messages">
                            <h6>chat</h6>
                            {messages.length ? (
                                messages.map((message, index) => (
                                    <Message key={index} props={message} />
                                ))
                            ) : (
                                <div className="server">No messages send</div>
                            )}
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
