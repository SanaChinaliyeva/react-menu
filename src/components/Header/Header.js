import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <ul className="nav d-flex justify-content-between py-1 border-bottom border-dark">
            <li className="nav-item">
                <NavLink to="/" activeClassName="active"  className="nav-link btn btn-light" href="#">Contacts Book</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/addcontact" activeClassName="active" className="nav-link btn btn-info" href="#">Add Contact</NavLink>
            </li>
        </ul>
    );
};

export default Header;