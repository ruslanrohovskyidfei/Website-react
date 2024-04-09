import React from 'react';
import logo from '../logo.svg';
import '../Styles/Sections/Footer.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping, faCopyright, faSearch} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";

function Footer() {
  return (
      <footer className="footer">
          <img src={logo} className="App-logo" alt="logo"/>
          <nav>
              <ul className="menu">
                  <li className={"menu-link"}>
                      <NavLink className={({isActive}) => (isActive ? "link active" : "link")} to="/">Home</NavLink>
                  </li>
                  <li className="menu-link">
                      <NavLink className={({isActive}) => (isActive ? "link active" : "link")}
                               to="/about">About</NavLink>
                  </li>
                  <li className="menu-link">
                      <NavLink className={({isActive}) => (isActive ? "link active" : "link")}
                               to="/shop">Shop</NavLink>
                  </li>
                  <li className="menu-link">
                      <NavLink className={({isActive}) => (isActive ? "link active" : "link")}
                               to="/help">Help</NavLink>
                  </li>
              </ul>
          </nav>
          <div className="copyright">
              <FontAwesomeIcon icon={faCopyright}/>
              <div className="text">All rights belongs to Ruslan Rohovskyi</div>
          </div>
      </footer>
  );
}

export default Footer;
