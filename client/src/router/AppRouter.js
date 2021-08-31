import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// componets
import Chat from "../components/Chat/Chat";
import Join from "../components/Join/Join";
import Music from "../components/MusicPlayer/MusicApp";
import WeatherApp from "../components/Weather/WeatherApp";
import Main from "../components/main/Main";
import Signup from "../components/SignUp/Signup";
import Signin from "../components/SignUp/Signin";
// Import functions
import { loadUser } from "../apis/auth";

const AppRouter = () => {
    const [userDetails, setUserDetails] = useState({ userDetails: {} });

    useEffect(() => {
        const getUserDetails = async () => {
            const loadedUser = await loadUser();
            if (loadedUser) {
                setUserDetails({
                    ...userDetails,
                    userDetails: loadedUser.data.data,
                });
            }
        };
        getUserDetails();
    }, []);

    return (
        <Switch>
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/" exact component={Join} />
            <Route path="/chat" component={Chat} />
            <Route path="/weather" component={WeatherApp} />
            <Route path="/songs" component={Music} />
            <Route exact path="/main" component={Main} />
        </Switch>
    );
};

export default AppRouter;
