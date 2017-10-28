import React, { Component } from 'react';
import { BrowserRouter, Switch , Route } from "react-router-dom";
import Main from "./Main";
import Login from "./Login";
import Logout from "./Logout";

const App = props => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/logout" component={Logout} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
