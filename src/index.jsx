import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

// import { ScrollToTop } from "./components";
import { ScrollToTop } from "./components/ScrollToTop";

import './index.css';
import App from "./App.jsx";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <ScrollToTop />
        <App />
        </Router>
    </React.StrictMode>
);





