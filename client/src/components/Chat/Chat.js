//Import
import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
// !SECTION

//SECTION Components
import Message from "./Message";
import InputPanel from "./InputPanel";
import UserJoinMessage from "./UserJoinMessage";
import User from "./User";
import "./Chat.css";

// ---
const ENDPOINT = "localhost:8000";
const socket = io(ENDPOINT, {
    transports: ["websocket"],
    withCredentials: true,
    extraHeaders: {
        "my-custom-header": "abcd",
    },
});

const Chat = () => {
    //States
    const [serverMessages, setServerMessages] = useState([]);
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);
    const [messageList, setMessageList] = useState(<div>No messages send</div>);
    const [userList, setUserList] = useState(<div className="userList"></div>);

    //Handlers

    // FIXME user join. not sync with each users
    const handleUserJoin = () => {
        const newObj = {
            message: "New user has joined",
            data: null,
        };
        const newJoin = {
            username: "abc",
            profilePic: "",
        };
        setUsers((users) => [...users, newJoin]);
        setServerMessages((serverMessages) => [...serverMessages, newObj]);
    };
    // user disconnect handler
    const handleUserLeave = () => {
        const newObj = {
            message: "A user left the chat",
            data: null,
        };
        setMessages((messages) => [...messages, newObj]);
    };
    // user message handler
    const handleUserMessages = (message, user, time) => {
        console.log(message);
        socket.emit("message", {
            message: message,
            user: user,
            time: time,
        });

        const newMessage = {
            message: message,
            user: user,
            time: time,
        };
        setMessages((messages) => [...messages, newMessage]);
    };

    const handleClientMessage = (data) => {
        const newMessage = {
            message: data.message,
            user: data.user,
            time: data.time,
        };
        setMessages((messages) => [...messages, newMessage]);
    };

    //useEffect Hooks
    useEffect(() => {
        socket.on("connection", () => handleUserJoin());
        socket.on("client-message", (data) => handleClientMessage(data));
        socket.on("disconnection", () => handleUserLeave());
    }, []);
    useEffect(() => {
        setMessageList(
            serverMessages.map((message, index) => (
                <UserJoinMessage key={index} props={message} />
            ))
        );

        setUserList(users.map((user, id) => <User key={id} props={user} />));
    }, [serverMessages, users]);
    useEffect(() => {
        setMessageList(
            messages.map((message, index) => (
                <Message key={index} props={message} />
            ))
        );
    }, [messages]);

    //JSX
    return (
        <div className="row">
            <div className="col-xs-12 col-sm-3">
                <div className="d-flex flex-column justify-content-between h-100 bg-light shadow">
                    <h6 className="text-center p-2">Online</h6>
                    <div className="card border-0 online-users bg-light">
                        <div className="card-body p-4">
                            <div className="chat-users text-center">
                                {userList}
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
                        <InputPanel handleUserMessages={handleUserMessages} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
