import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import AppRouter from "./router/AppRouter";

const App = () => {
    return (
        <Router>
            <AppRouter />
        </Router>
    );
};

export default App;
