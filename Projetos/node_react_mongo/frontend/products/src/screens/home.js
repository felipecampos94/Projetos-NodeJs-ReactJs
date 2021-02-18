import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import Menu from "../componentes/menu";
import Login from "../componentes/login";

export default function Home() {
    return (
        <Fragment>
            <Menu/>
            <div className="container">
                <h1>Welcome React</h1>
                <Link to="/allusers">
                    <button className="button">LISTA ALL USERS</button>
                </Link>
                <Login/>
            </div>
        </Fragment>
    );

}