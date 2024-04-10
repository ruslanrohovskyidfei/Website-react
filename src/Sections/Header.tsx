import React, {useState} from 'react';
import logo from '../logo.svg';
import {useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from "react-router-dom";
import '../Styles/Sections/Header.css';
import {
    faCartShopping, faBars, faSearch,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
    document.title = "Soundscape! Ultimate destination!";
    const cartLocalStorageLength: number = JSON.parse(localStorage.getItem("cartItems") || "[]").length;
    const [searchInput, setSearchInput] = useState("");
    const [menu, setMenuMode] = useState(false);
    const navigate = useNavigate();
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const SetMenu = (e: any) => {
        const tag = e.target.tagName;
        const className = e.target.className;
        const keyCode = e.keyCode;
        if(window.innerWidth <= 992) {
            if(tag !== "UL") {
                e.preventDefault();
                if(className !== "search") {
                    setMenuMode(!menu)
                }
            } else {
                if(className !== "search" && className !== "menu-search") {
                    setMenuMode(!menu)
                }
            }
            if(menu === true) {
                document.body.style.overflow = "auto";
                scrollToTop();
            } else {
                document.body.style.overflow = "hidden";
            }
            if(tag === "INPUT") {
                document.body.style.overflow = "hidden";
            }
        }
    };
    return (
        <header className="App-header">
            <NavLink to={'/'}>
                <img src={logo} className="App-logo" alt="logo"/>
            </NavLink>
            <button className="menu-trigger" onClick={(e) => SetMenu(e)}>
                <FontAwesomeIcon icon={faBars}/>
            </button>
            <nav onClick={(e) => SetMenu(e)}
                 onKeyDown={(e) => (e.keyCode === 13 ?  setMenuMode(!menu) : false )}
            >
                <ul className={"menu" + (menu === true ? " show" : "") }>
                    <li className="menu-search">
                        <p className="icon" onClick={() => navigate("/search/" + searchInput)}>
                            <FontAwesomeIcon icon={faSearch} onClick={(e) => scrollToTop()}/>
                        </p>
                        <input type="text" className="search" placeholder="Search"
                               onChange={(e) => setSearchInput(e.target.value)}
                               onKeyDown={(e) => (e.keyCode === 13 ? navigate("/search/" + searchInput) : null)}
                        />
                        <NavLink className={'link'} to="/search">
                            <p className="text">Search</p>
                        </NavLink>
                    </li>
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
