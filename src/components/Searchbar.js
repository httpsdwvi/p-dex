import { React, useState } from "react";
import '../styles/Searchbar.css'

const Searchbar = (props) => {
    const [search, setSearch] = useState("pikachu")
    const { onSearch } = props

    const onChangeHandler = (evt) => {
        setSearch(evt.target.value.toLowerCase())
        if (evt.target.value.length === 0) {
            onSearch(undefined)
        }
    }

    const onButtonClickHandler = () => {
        onSearch(search)
    }

    return (
        <div className="container-search">
            <div>
                <input className="searchbar" placeholder="Search pokemon" onChange={onChangeHandler} />
            </div>
            <div className="d-btn">
                <button className="btn-search" onClick={onButtonClickHandler}> click </button>
            </div>
        </div>
    );
};

export default Searchbar;