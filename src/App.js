import  { React, useEffect, useState }from 'react';
import logo from './logo.svg';
import './App.css';
import { searchPokemon, getPoke, getPokeData } from './api';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Pokedex from './components/Pokedex';
import Footer from './components/Footer';

function App() {

  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemon] = useState([])
  const [notFound, setNotFound] = useState([])

  const itensPerPage = 30
  const fetchPokemons = async () => {
    try {
      setLoading(true)
      setNotFound(false)
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

  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }

    setLoading(true)
    setNotFound(false)
    const result = await searchPokemon(pokemon)
    if (!result) {
      setNotFound(true)
    } else {
      setPokemon([result])
      setPage(0)
      setTotalPages(1)
    }
    setLoading(false)

  }

  useEffect(() => {
    console.log("Loaded")
    fetchPokemons()
  }, [page])

  return (
    <div>
      <Navbar />
      <Searchbar onSearch={onSearchHandler} />
      {notFound ? (
        <div className='not-found'> LAL </div>
      ) :
        (<Pokedex pokemons={pokemons} loading={loading} page={page} setPage={setPage} totalPages={totalPages} />)}
      <Footer />
    </div>
  );
}

export default App;