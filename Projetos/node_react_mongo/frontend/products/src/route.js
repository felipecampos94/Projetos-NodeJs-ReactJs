import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./screens/home";
import ListUsers from "./screens/listusers";

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/allusers" component={ListUsers}/>
            </Switch>
        </BrowserRouter>
    );

}