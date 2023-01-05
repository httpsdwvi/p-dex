import React from "react";

const Pokemon = (props) => {
    const {pokemon} = props


    return (
        <div className="card-pokemon">
            <div className="container-img">
                <img className="img-pokemon" src={pokemon.sprites.front_default}/>
            </div>
            <div className="card">
                <div className="card-header">
                    <h4>{pokemon.name}</h4>
                    <div>{pokemon.id}</div> 
                </div>
                <div className="card-bottom">
                    <div className="poke-type">
                        {pokemon.types.map((type,index) => {
                            return (
                                <div className="poke-type-txt" key={index}>{type.type.name}</div>
                            )
                        }
                        )}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Pokemon