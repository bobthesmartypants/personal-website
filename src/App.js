import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import './App.css';

import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Resume from "./Resume/Resume";
import Hobbies from "./Hobbies/Hobbies";
import Music from "./Music/Music";
import AV from "./AV/AV";

const App = () => {
    // optionLabels and optionPaths biject
    // also modify $menu-items in Navbar-anim.scss if array length changes
    // Normal Navbar order
    const optionLabels = ["Home", "About", "Resume", "Music", "A/V"];
    const optionPaths = ["/", "/about", "/resume", "/music", "/av"];
    // Large Navbar order
    const optionLabelsLarge = ["About", "Resume", "Home", "Music", "A/V"];
    const optionPathsLarge = ["/about", "/resume", "/", "/music", "/av"];


    return (
        <div className="App">
            <Switch>
                <Route path={optionPaths[0]} exact>
                    <Navbar key="nav-large" optionLabels={optionLabelsLarge} optionPaths={optionPathsLarge} isLarge={1} />
                </Route>
                <Route>
                    <Navbar key="nav-normal" optionLabels={optionLabels} optionPaths={optionPaths} isLarge={0} />
                </Route>
            </Switch>

            <Switch>
                <Route path={optionPaths[1]} component={Resume} exact />
                <Route path={optionPaths[1]}>
                    <Redirect to={optionPaths[1]} />
                </Route>

                <Route path={optionPaths[2]} component={Hobbies} exact />
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

                <Route path={optionPaths[0]} component={Home} exact />
                <Route>
                    <Redirect to={optionPaths[0]} />
                </Route>
            </Switch>
        </div>
    );
}


export default App;
