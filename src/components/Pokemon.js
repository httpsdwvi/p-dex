import React from "react";

const Pokemon = (props) => {
    const {pokemon} = props


    return (
        <div className="card-pokemon">
            <div className="container-img">
                <img src={pokemon.sprites.front_default}/>
            </div>
            {pokemon.name}
        </div>
    )

}

export default Pokemon