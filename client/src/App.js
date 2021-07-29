import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// componets
import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={Chat} />
      </Router>
    );
  }
}

export default App;
