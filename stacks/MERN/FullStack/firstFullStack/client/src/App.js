import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Details from './views/Details';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      {/* <Main/> */}
      <Router>
        <Main path="/" />
        <Details path="view/:id" />
        <Update path="view/update/:id" />
      </Router>
    </div>
  );
}

export default App;
