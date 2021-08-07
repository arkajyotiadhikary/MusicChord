import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// componets
import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";
import Music from "./components/MusicPlayer/MusicApp";
import WeatherApp from "./components/Weather/WeatherApp";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={Chat} />
        <Route path="/weather" component={WeatherApp} />
        <Route path="/songs" component={Music} />
      </Router>
    );
  }
}

export default App;
