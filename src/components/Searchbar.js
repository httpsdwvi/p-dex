import React from "react";
import { useState } from "react";
import { searchPokemon } from "../api"

const Searchbar = () => {
    const [search, setSearch] = useState("pikachu")
    const [pokemon, setPokemon] = useState()

    const onChangeHandler = (evt) => {
        setSearch(evt.target.value)
    };

    const onButtonClickHandler = () => {
        onSearchHandler(search)
    }

    const onSearchHandler = async (pokemon) => {
        const result = await searchPokemon(pokemon)
        setPokemon(result)
    }

    return (
        <div className="container-search">
            <div>
                <input className="searchbar" placeholder="Search pokemon" onChange={onChangeHandler} />
            </div>
            <div className="d-btn">
                <button className="btn-search" onClick={onButtonClickHandler}> click </button>
            </div>
            {pokemon ? (
                <div>
                    <div>Name: {pokemon.name}</div>
                    <img src={pokemon.sprites.front_default} />
                </div>
            ) : null}
        </div>
    );
};

export default Searchbar;