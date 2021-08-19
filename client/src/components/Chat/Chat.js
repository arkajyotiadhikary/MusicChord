import React, { useState, useEffect } from "react";
// import query_string from "query-string";
import { io } from "socket.io-client";
import Message from "./Message";
import InputPanel from "./InputPanel";
import UserJoinMessage from "./UserJoinMessage";
import User from "./User";
import "./Chat.css";

// TODO why only * is working?
const ENDPOINT = "localhost:8000";

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [messageList, setMessageList] = useState(<div>No messages send</div>);

    // NOTE send messge after new user join

    useEffect(() => {
        const socket = io(ENDPOINT, {
            transports: ["websocket"],
            withCredentials: true,
            extraHeaders: {
                "my-custom-header": "abcd",
            },
        });
        socket.on("connection", () => {
            const newObj = {
                message: "New user has joined",
                data: null,
            };

            setMessages((messages) => [...messages, newObj]);
        });

        socket.on("disconnection", () => {
            const newObj = {
                message: "A user left the chat",
                data: null,
            };
            setMessages((messages) => [...messages, newObj]);
        });
    }, []);

    useEffect(() => {
        setMessageList(
            messages.map((message, index) => (
                <UserJoinMessage key={index} props={message} />
            ))
        );
    }, [messages]);

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
                    <h6 className="text-center">chat</h6>
                    <div className="card border-0 chat overflow-y-scroll">
                        <div className="card-body chat-body" id="messages">
                            <div className="message-list">{messageList}</div>
                        </div>
                    </div>
                    <div className="card-footer bg-white border-0">
                        <InputPanel />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
