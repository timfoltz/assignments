import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Details from './views/Details';

function App() {
  return (
    <div className="App">
      {/* <Main/> */}
      <Router>
        <Main path="project/" />
        <Details path="view/:id" />
      </Router>
    </div>
  );
}

export default App;
