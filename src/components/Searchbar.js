import React from "react";
import { useState } from "react";

const Searchbar = (props) => {
    const {onSearch} = props
    const [search, setSearch] = useState("pikachu")
    const onChangeHandler = (evt) => {
        console.log("Pokemon: ", evt.target.value)
        setSearch(evt.target.value)
    };
    
    const onButtonClickHandler = () => {
        onSearch(search)
        console.log("Pokemon: ", search)
    }

    return (
        <nav className="container-search">
            <div>
                <input className="searchbar" placeholder="Search pokemon" onChange={onChangeHandler}/>
            </div>
            <div className="d-btn">
                <button className="btn-search" onClick={onButtonClickHandler}> click </button>
            </div>
        </nav>
    );
};

export default Searchbar;