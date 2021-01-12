import './App.css';
import React, {useState} from 'react'
import {Link,Router} from '@reach/router'
import Home from './components/Home';
import Number from './components/Number';
import Word from './components/Word';
import Colors from './components/Colors';

function App() {

  const [number, setNumber] = useState('')
  const [color, setColor] = useState('')
  const [bgColor, setBgColor] = useState('')

  // const handleSubmit = (event) =>{
  //   event.preventDefault();
    
  // }

  return (
    <div className="App">
      <h1>Reach Router</h1>
      {JSON.stringify(number)}
      <label htmlFor="number">Enter Number</label>
      <input type="text" name="number" value={number} onChange={ e => setNumber(e.target.value)} />
      <Link to='/:{number}'>Click Me!</Link>
      
      {/* <form onSubmit={handleSubmit}>
                <input type="text" name="number" value ={number} onChange={ e => setNumber(e.target.value)}/>
                <input type="submit" value="Try Me!"/>
            </form> */}
      <Router>
        
        <Home path='/home' />
        <Number path='/:id' />
        <Word path='/:word' />
        <Colors path='/:word/:bgcolor/:color' />
      </Router>
    </div>
  );
}

export default App;
