import { useState, useEffect } from 'react';
import axios from 'axios'
import {Link} from "@reach/router"
// import '../App.css'


const Player = ({id, updateAPI}) =>{

    const [player, setPlayer] = useState({
        gameOne: "",
        gameTwo: "",
        gameThree: "",
        createdAt: Date.now(),
        position: "",
        name: "",
        updatedAt: Date.now()
    });

    useEffect(()=>{
        axios.get(`http://localhost:8888/player/${id}`)
            .then(res =>{
                console.log(res);
                setPlayer(res.data)
            })
            .catch(err =>{
                console.log(err);
            })
    },[id])

    const GameOneHandler = (gameOne,id) => {
        const changedPlayer = {...player};
        changedPlayer.gameOne = gameOne;
        setPlayer(changedPlayer);
        updateAPI({gameOne: gameOne},id);
    }
    const GameTwoHandler = (gameTwo,id) => {
        const changedPlayer = {...player};
        changedPlayer.gameTwo = gameTwo;
        setPlayer(changedPlayer);
        updateAPI({gameTwo: gameTwo},id);
    }
    const GameThreeHandler = (gameThree,id) => {
        const changedPlayer = {...player};
        changedPlayer.gameThree = gameThree;
        setPlayer(changedPlayer);
        updateAPI({gameThree: gameThree},id);
    }



    return (
        <div style={{padding: "30px"}}>

            <Link className="links" to="/" >Home</Link>
            <p>{player.name}</p>
            <p>{player.position}</p>
            <p>{player._id}</p>
            <p>Game 1 :{player.gameOne}</p>
            <p>Game 2 :{player.gameTwo}</p>
            <p>Game 3 :{player.gameThree}</p>


            {/* <p>Game 1<input 
                type="checkbox" 
                checked={player.gameOne}
                onChange={e => GameOneHandler(e.target.checked, player._id)}/>
            </p>
            <p>Game 2<input 
                type="checkbox" 
                checked={player.gameTwo}
                onChange={e => GameTwoHandler(e.target.checked, player._id)}/>
            </p>
            <p>Game 3<input 
                type="checkbox" 
                checked={player.gameThree}
                onChange={e => GameThreeHandler(e.target.checked, player._id)}/>
            </p> */}
            {/* <Link className="links" to={`/edit/${id}`} >Edit</Link> */}
        </div>
    )
}

export default Player