import React from "react";
import './style.css'
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";

const NavBar = () => {
    return (
        <ul className="nav-list">
            <li className="nav-item">
                <Link to="/">ImpossibleSkateShop</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/trucks">Trucks</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/skate table">Tablas</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/ruedas">Ruedas</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/indumentaria">Indumentaria</Link>
            </li>
            <div className="widget-container">
                <CartWidget/>
            </div>
        </ul>
    )
}

export default NavBar