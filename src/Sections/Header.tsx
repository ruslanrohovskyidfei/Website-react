import React from 'react';
import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from "react-router-dom";
import './Styles/App.css';
import {
    faCartShopping, faSearch,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
            <ul className="menu">
                <li className="menu-search" >
                    <p className="icon">
                        <FontAwesomeIcon icon={faSearch}/>
                    </p>
                    <input type="text" className="search" placeholder="Search" />
                    <NavLink className={'link'}  to="/search">Search</NavLink>
                </li>
                <li className={"menu-link"}>
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/">Home</NavLink>
                </li>
                <li className="menu-link">
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/about">About</NavLink>
                </li>
                <li className="menu-link">
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/shop">Shop</NavLink>
                </li>
                <li className="menu-link">
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/help">Help</NavLink>
                </li>
                <li className="menu-cart">
                    <p className="icon">
                        <FontAwesomeIcon icon={faCartShopping}/>
                    </p>
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/cart">Your Cart</NavLink>
                </li>
            </ul>
        </nav>
      </header>
  );
}

export default Header;
