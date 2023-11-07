import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "./images/logo";
import { MenuIcon } from "./images/icon-menu";
import "./Navbar.css"
import { MenuCloseIcon } from "./images/icon-menu-close";

function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false)
    const [showMenuIcon, setShowMenuIcon] = useState(true)
    const [showOverlay, setShowOverlay] = useState(false)
    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
        setShowMenuIcon(!showMenuIcon);
        setShowOverlay(!showOverlay)
    };

    return (
        <nav className="navbar">
            <div className="container">
                {showOverlay ? <div className="overlay" /> : null}
                <Link to="/" className="logo">
                    <Logo />
                </Link>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    {showMenuIcon ? <MenuIcon /> : <MenuCloseIcon />}
                </div>
                <div className={`nav-elements  ${showNavbar && "active"}`}>
                    <ul>
                        <li>
                            <Link >Home</Link>
                        </li>
                        <li>
                            <Link >New</Link>
                        </li>
                        <li>
                            <Link>Popular</Link>
                        </li>
                        <li>
                            <Link>Trending</Link>
                        </li>
                        <li>
                            <Link >Categories</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Navbar