import React from "react";

const Navbar = () => {
    const logo = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    return (
        <nav>
            <div>
                <img src = {logo} alt="Logo" className="navbar-logo"/>
            </div>
        </nav>
    );
};

export default Navbar;