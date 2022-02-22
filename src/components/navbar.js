import React from "react";
import { NavLink } from "react-router-dom";
import Login from "./login";

function NavBar() {
    return (
        <div>
            <NavLink
                to="/"
                exact
            >
                Home
            </NavLink>
            <NavLink
                to="/about"
                exact
            >
                About
            </NavLink>
            <Login />
        </div>
    );
}

export default NavBar;