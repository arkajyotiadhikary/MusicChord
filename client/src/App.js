import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

// componets
import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";
import Music from "./components/MusicPlayer/MusicApp";
import WeatherApp from "./components/Weather/WeatherApp";
import Main from "./components/main/Main";
import LoginApp from "./components/SignUp/LoginApp";
import Signup from "./components/SignUp/Signup";
import Signin from "./components/SignUp/Signin";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Route path="/signin" component={Signin} />
                <Route path="/signup" component={Signup} />
                <Route path="/" exact component={Join} />
                <Route path="/chat" component={Chat} />
                <Route path="/weather" component={WeatherApp} />
                <Route path="/songs" component={Music} />
                <Route path="/main" component={Main} />
            </Router>
        );
    }
}

export default App;
