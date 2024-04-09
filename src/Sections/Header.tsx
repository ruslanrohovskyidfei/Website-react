import React, {useState} from 'react';
import logo from '../logo.svg';
import {useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from "react-router-dom";
import '../Styles/App.css';
import {
    faCartShopping, faDotCircle, faSearch,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
    const cartLocalStorageLength: number = JSON.parse(localStorage.getItem("cartItems") || "[]").length;
    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate();
    return (
      <header className="App-header">
        <NavLink to={'/'}>
            <img src={logo} className="App-logo" alt="logo" />
        </NavLink>
        <nav>
            <ul className="menu">
                <li className="menu-search">
                    <p className="icon" onClick={() => navigate("/search/" + searchInput)}>
                        <FontAwesomeIcon icon={faSearch}/>
                    </p>
                    <input type="text" className="search" placeholder="Search"
                       onChange={(e) => setSearchInput(e.target.value)}
                       onKeyDown={(e) => ( e.keyCode === 13 ? navigate("/search/" + searchInput)  : null )}
                    />
                    <NavLink className={'link'} to="/search">
                        <p className="text">Search</p>
                    </NavLink>
                </li>
                <li className={"menu-link"}>
                    <NavLink className={({isActive}) => (isActive ? "link active" : "link")} to="/">Home</NavLink>
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
                    <NavLink className={({isActive}) => (isActive ? "link active" : "link")} to="/cart">
                        <p className="icon">
                            <FontAwesomeIcon icon={faCartShopping}/>
                            {cartLocalStorageLength > 0 ? <p className="count">{cartLocalStorageLength}</p> : ""}
                        </p>
                        <p className="text">Cart</p>
                    </NavLink>
                </li>
            </ul>
        </nav>
      </header>
    );
}

export default Header;
