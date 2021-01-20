import './App.css';
import { Router } from '@reach/router'
import {useState, useEffect} from 'react'
import axios from 'axios'
import List from './views/List';
import Create from './views/Create';
import Edit from './views/Edit';
import Todo from './views/Todo';



function App() {

const [todos, setTodos] = useState([])


  useEffect(()=>{

    axios.get('http://localhost:8888/todos')
      .then(res =>{
        setTodos(res.data)
      })
      .catch(err =>{
        console.log(err)
      });
  }, [])
  return (
    <div className="App">
      <div>
        <Router>
          <List path="/" todos={todos}/>
          <Create path="/new"/>
          <Edit path="/edit/:id"/>
          <Todo path="/show/:id"/>

        </Router>

        
      </div>



    </div>
  );
}

export default App;
