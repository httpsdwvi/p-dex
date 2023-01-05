import React from 'react';
import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Pokedex from './components/Pokedex';
import { searchPokemon, getPoke, getPokeData } from './api';

function App() {


  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemon] = useState([])

  const fetchPokemons = async () => {
    try {
      setLoading(true)  
      const data = await getPoke()
      const promisses = data.results.map(async (pokemon) => {
        return await getPokeData(pokemon.url)
      })

      const results = await Promise.all(promisses)
      setPokemon(results)
      setLoading(false)
    } catch (err) {
      console.log("Deu xabu:", err) 
    } 
  }

  useEffect(() => {
    console.log("Loaded")
    fetchPokemons()
  }, [])
  
  return (
    <div>
      <Navbar />
      <Searchbar />
      <Pokedex pokemons={pokemons} loading={loading}/>
    </div>
  );
}

export default App;