import './App.css';
import { useState } from 'react'
import TabsDisplay from './components/Display';
import Tabs from './components/Tabs';
import App1 from './components/transitions';
// import styled from "styled-components";




function App() {
  return (
    <div className="body">
      <div className="App">
        <Tabs />
      </div>
    </div>
  );
}

export default App;
