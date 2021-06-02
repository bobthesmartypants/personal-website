import React from "react";
import {Switch, Route} from "react-router-dom";

import './App.css';

import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";

const App = () => (
    <div className="App">
        <Navbar />
        <Switch>
            <Route path="/" component={Home} exact />
        </Switch>
    </div>
);


export default App;
