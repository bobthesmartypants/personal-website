import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import './App.css';

import Navbar from "./Navbar/Navbar";

// Page components
import Home from "./Home/Home";

import About from "./About/About";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Music from "./Music/Music";
import AV from "./AV/AV";

const App = () => {
    // optionLabels and optionPaths biject
    // also modify $menu-items in Navbar-anim.scss if array length changes
    // Normal Navbar order
    const optionLabels = ["About", "Skills", "Projects", "Music", "A/V"];
    const optionPaths = ["/about", "/skills", "/projects", "/music", "/av"];

    return (
        <div className="App">
            <Switch>
                <Route path="/" exact>
                    <Navbar key="nav-large" optionLabels={optionLabels} optionPaths={optionPaths} isLarge={1} />
                </Route>
                <Route>
                    <Navbar key="nav-normal" optionLabels={optionLabels} optionPaths={optionPaths} isLarge={0} />
                </Route>
            </Switch>

            <Switch>
                <Route path={optionPaths[0]} component={About} exact />
                <Route path={optionPaths[0]}>
                    <Redirect to={optionPaths[0]} />
                </Route>

                <Route path={optionPaths[1]} component={Projects} exact />
                <Route path={optionPaths[1]}>
                    <Redirect to={optionPaths[1]} />
                </Route>

                <Route path={optionPaths[2]} component={Skills} exact />
                <Route path={optionPaths[2]}>
                    <Redirect to={optionPaths[2]} />
                </Route>

                <Route path={optionPaths[3]} component={Music} exact />
                <Route path={optionPaths[3]}>
                    <Redirect to={optionPaths[3]} />
                </Route>

                <Route path={optionPaths[4]} component={AV} exact />
                <Route path={optionPaths[4]}>
                    <Redirect to={optionPaths[4]} />
                </Route>

                <Route path="/" component={Home} exact />
                <Route>
                    <Redirect to="/" />
                </Route>
            </Switch>
        </div>
    );
}


export default App;
