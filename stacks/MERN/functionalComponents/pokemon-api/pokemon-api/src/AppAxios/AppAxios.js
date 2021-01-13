import './App.css';
import React, {useState} from 'react'
import PokeFetch from './components/Fetch';
import ViewPoke from './components/ViewPoke';
import axios from 'axios';

function App() {

  const [pokemon, setPokemon] = useState([]);

  const connectLink = () =>{
    axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807')
      .then(response=>{setPokemon(response.data.results)});
    // .then(response => response.json())

    // .then(response => setPokemon(response.results))
  }
  


  


  return (
    <div className="App">
      <h1>Pokemon App</h1>
      <PokeFetch connectLink={connectLink} />
      {
        pokemon.map((poke, idx)=>{
          return(<ViewPoke poke={poke} idx={idx} />)
        })
      }
    </div>
  );
}

export default App;
