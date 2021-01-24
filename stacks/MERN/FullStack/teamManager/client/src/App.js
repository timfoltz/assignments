import './App.css';
import { Router } from '@reach/router'
import {useState, useEffect} from 'react'
import axios from 'axios'
import List from './views/List';
import Create from './views/Create';
import Edit from './views/Edit';
import Player from './views/Player';



function App() {

const [players, setPlayers] = useState([])


  useEffect(()=>{

    axios.get('http://localhost:8888/player')
      .then(res =>{
        setPlayers(res.data)
      })
      .catch(err =>{
      });
  }, [])

  

  const addPlayer = (player) => {
    setPlayers([...players,player])
  }
  
  const updatePlayer = (changedPlayer, id) => {
    setPlayers( players.map(player => {
      if(player._id === id){
        return changedPlayer;
      }
      return player;
    }))
  }

  const deletePlayer =(id) => {
    const changedPlayers = players.filter((player) => {
      if(player._id === id){
        return false;
      }
      return true;
    })
    setPlayers(changedPlayers)

  }

  const updateAPI = (data,id) => {
    axios.put(`http://localhost:8888/player/${id}`,data)
    .then(res =>{
      console.log(res);
      updatePlayer(res.data, id);
    })
    .catch(err => {
      console.log(err)
    })
  };

  const deleteAPI = (id) => {

    
    axios.delete(`http://localhost:8888/player/${id}`)
    .then(res => {
      console.log(res)
      deletePlayer(id)
    })
    .catch(err =>{
      console.log(err)
    })
  }


  return (
    <div className="App">
      <div>
        <Router>
          <List path="/" 
            players={players} 
            updateAPI={updateAPI}
            deleteAPI={deleteAPI}/>
          <Create path="/new" addPlayer={addPlayer}/>
          {/* <Edit path="/edit/:id" updateAPI={updateAPI}/> */}
          <Player path="/show/:id" updateAPI={updateAPI}/>
        </Router>

        
      </div>



    </div>
  );
}

export default App;
