import React from "react";
import '../styles/Navbar.css';

const Navbar = () => {
    const logo = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    return (
        <nav className="container-nav">
            <div>
                <img src = {logo} alt="Logo" className="navbar-logo"/>
            </div>
        </nav>
    );
};

export default Navbar;