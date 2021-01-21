import './App.css';
import { Router, navigate } from '@reach/router'
import {useState, useEffect} from 'react'
import axios from 'axios'
import List from './views/List';
import Create from './views/Create';
import Edit from './views/Edit';
import Author from './views/Author';



function App() {

const [authors, setAuthors] = useState([])
const [sortedAuthors, setSortedAuthors] = useState([])



  useEffect(()=>{

    axios.get('http://localhost:8888/authors')
      .then(res =>{
        setAuthors(res.data)
      })
      .catch(err =>{
        console.log(err)
      });
  }, [])

  const refreshAPI = () =>{
    axios.get('http://localhost:8888/authors')
      .then(res =>{
        setAuthors(res.data)
      })
      .catch(err =>{
        console.log(err)
      });
  }

  const addAuthor = (author) => {
    setAuthors([...authors,author])
  }
  // const sorted = authors.sort({name:'asc'})
  const deleteHandler = (id) =>{
    axios.delete(`http://localhost:8888/authors/${id}`)
        .then(res => {
          refreshAPI()
          navigate("/")})
}

  return (
    <div className="App">
      <div>
        <Router>
          <List path="/" authors={authors} />
          <Create path="/new" addAuthor={addAuthor}/>
          <Edit path="/edit/:id" deleteHandler={deleteHandler}/>
          <Author path="/show/:id"/>

        </Router>

        
      </div>



    </div>
  );
}

export default App;
