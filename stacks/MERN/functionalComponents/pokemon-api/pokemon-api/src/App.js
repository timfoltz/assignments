import './App.css';
import React, {useState} from 'react'
import PokeFetch from './components/Fetch';
import ViewPoke from './components/ViewPoke';

function App() {

  const [pokemon, setPokemon] = useState([]);

  const connectLink = () =>{
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807')
    .then(response => response.json())
    .then(response => setPokemon(response.results))
  }
  


  
  // useEffect(() => {
  //   fetch(pokeLink)
  //   .then(response => response.json())
  //   .then(response => setPokemon(response.results))
  //   console.log(pokeLink)
  // }, [pokeLink]);


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
