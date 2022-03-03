import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar">
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
            <NavLink
                to="/translator"
                exact
            >
                Translator
            </NavLink>
            <NavLink
                to="/flashcarddeck"
                exact
            >
                Flash Card Deck
            </NavLink>
            <NavLink
                to="/addnewcard"
                exact
            >
                Add New Card
            </NavLink>
        </div>
    );
}

export default NavBar;