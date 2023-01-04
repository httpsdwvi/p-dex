import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import {searchPokemon} from "./api"

const onSearchHandler = async (pokemon) => {
  const result = await searchPokemon(pokemon)
  console.log("Pokemon: ", result)
}

function App() {
  return (
    <div>
      <Navbar />
      
      <Searchbar 
        onSearch={onSearchHandler}
      />
      <div className="App">

      </div>
    </div>
  );
}

export default App;