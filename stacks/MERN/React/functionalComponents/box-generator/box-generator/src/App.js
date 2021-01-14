import './App.css';
// import Form from './components/Form'
import DisplayBox from './components/DisplayBox';
import ColorForm from './components/Form';
import { useState } from 'react';



function App() {

  const [boxes, setBoxes] = useState([]);
  // const [newBox, setNewBox] = useState([{}])
  console.log("################start of app###################",boxes)
  
  
  const addNewBox = (color,height,width) => {
    // const box = newBox.map(b => b);
    console.log("******",color,height,width,"*****")
    setBoxes([...boxes,{color,height,width}]);
    console.log("Inside the makeNewBox function",boxes)
  }
  return (
    <div className="App">
      
        <ColorForm boxFromForm={ addNewBox }/>
        
      
      <DisplayBox box ={ boxes }/>
    </div>
  );
}

export default App;

// *********************************************BACKUP

// import './App.css';
// import Form from './components/Form'
// import DisplayBox from './components/DisplayBox';
// import ColorForm from './components/Form';
// import { useState } from 'react';



// function App() {

//   const [newBox, setNewBox] = useState([{}])
//   console.log("this is start of app",newBox)
//   const makeNewBox = (newBox) => {
//     setNewBox(newBox);
//     console.log("Inside the makeNewBox function",newBox)
//   }
//   return (
//     <div className="App">
      
//         <ColorForm addNewBox={ makeNewBox }/>
        
      
//       <DisplayBox box ={ newBox }/>
//     </div>
//   );
// }

// export default App;
