import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import AppRouter from "./router/AppRouter";
import { setSession } from "./apis/auth";

const App = () => {
    return (
        <>
            {/* TODO have to add this two button in a diifferent page */}
            {/* <button
                class="btn btn-primary me-3"
                onClick={() => setSession("join")}
            >
                Join
            </button>
            <button class="btn btn-primary" onClick={() => setSession("leave")}>
                Leave
            </button> */}
            <Router>
                <AppRouter />
            </Router>
        </>
    );
};

export default App;
