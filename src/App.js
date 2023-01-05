import React from 'react';
import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Pokedex from './components/Pokedex';
import { searchPokemon, getPoke, getPokeData } from './api';

function App() {


  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemon] = useState([])

  const itensPerPage = 25
  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPoke(itensPerPage, itensPerPage * page)
      const promisses = data.results.map(async (pokemon) => {
        return await getPokeData(pokemon.url)
      })

      const results = await Promise.all(promisses)
      setPokemon(results)
      setLoading(false)
      setTotalPages(Math.ceil(data.count / itensPerPage))
    } catch (err) {
      console.log("Deu xabu:", err)
    }
  }

  useEffect(() => {
    console.log("Loaded")
    fetchPokemons()
  }, [page])

  return (
    <div>
      <Navbar />
      <Searchbar />
      <Pokedex pokemons={pokemons} loading={loading} page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
}

export default App;