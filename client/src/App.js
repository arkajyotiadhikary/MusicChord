import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    useHistory,
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

// componets
import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";
import Music from "./components/MusicPlayer/MusicApp";
import WeatherApp from "./components/Weather/WeatherApp";
import Main from "./components/main/Main";
import Signup from "./components/SignUp/Signup";
import Signin from "./components/SignUp/Signin";

// Import functions
import { loadUser } from "./apis/auth";

const App = () => {
    const history = useHistory();

    useEffect(() => {
        loadUser();
        // history.push("/main");
    }, [history]);

    return (
        <Router>
            <Switch>
                <Route path="/signin" component={Signin} />
                <Route path="/signup" component={Signup} />
                <Route path="/" exact component={Join} />
                <Route path="/chat" component={Chat} />
                <Route path="/weather" component={WeatherApp} />
                <Route path="/songs" component={Music} />
                <Route path="/main" component={Main} />
            </Switch>
        </Router>
    );
};

export default App;
