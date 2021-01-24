import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router'



const Create = ({addPlayer}) =>{

    const [name,setName] = useState("")
    const [position,setPosition] = useState("WILL PLAY ANYWHERE")
    const [gameOne, setGameOne] = useState("Playing")
    const [gameTwo, setGameTwo] = useState("Playing")
    const [gameThree, setGameThree] = useState("Playing")
    const [errorMessages, setErrorMessagess] = useState([])

    const newPlayer ={
        name: name,
        position: position,
        gameOne: gameOne,
        gameTwo: gameTwo,
        gameThree: gameThree,
    }


    const formHandler =(e) =>{
        
        e.preventDefault();
        axios.post("http://localhost:8888/player", newPlayer)
        .then(res =>{
            console.log(res)
            addPlayer(res.data)
            navigate('/')
        })
        .catch(err =>{
            const errors = err.response.data.errors;
            const errorArr=[];
            for(const key of Object.keys(errors)){
                errorArr.push(errors[key].message)
            }
            setErrorMessagess(errorArr)

            console.log(errorArr)

        })
    }

    return (
        <div style={{marginTop:"40px"}}>
            <Link to="/" className="links">Home</Link>
            <form onSubmit={formHandler}>
                {errorMessages.map((error,idx)=><p key={idx} style={{color:"red"}}>{error}</p>)}
                <p>Name:</p>
                {name.length >0 && name.length <2 ? <p className="errorP">Name Must be at least 2 characters!</p>: ""}
                <input 
                    type="text" 
                    required
                    value={name} 
                    onChange= {e =>setName(e.target.value)}/>
                <p>Position:</p>
                {position.length >0 && position.length <5 ? <p className="errorP">Position Must be at least 5 characters!</p>: ""}

                <input 
                    type="text" 
                    
                    value={position} 
                    onChange= {e => setPosition(e.target.value)}/>
                    <br/>
                <label htmlFor="gameOne" style={{margin:"10px"}}>Game One:</label>
                <select name="gameOne" value={gameOne} onChange={e => setGameOne(e.target.value)}>
                        <option value="playing">Playing</option>
                        <option value="notPlaying">Not Playing</option>
                        <option value="undecided">Undecided</option>
                </select><br/>
                <label htmlFor="gameTwo" style={{margin:"10px"}}>Game Two:</label>
                <select name="gameTwo" value={gameTwo} onChange={e => setGameTwo(e.target.value)}>
                        <option value="playing">Playing</option>
                        <option value="notPlaying">Not Playing</option>
                        <option value="undecided">Undecided</option>
                </select><br/>
                <label htmlFor="gameThree" style={{margin:"10px"}}>Game Three:</label>
                <select name="gameThree" value={gameThree} onChange={e => setGameThree(e.target.value)}>
                        <option value="playing">Playing</option>
                        <option value="notPlaying">Not Playing</option>
                        <option value="undecided">Undecided</option>
                </select><br/>
                <input type="submit" value="Add"/>
            </form>


        </div>
    )
}

export default Create