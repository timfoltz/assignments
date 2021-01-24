import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from '@reach/router';




const List = ({players, updateAPI, deleteAPI}) =>{

    const [deleteReq, setDeleteReq] = useState(true)

    const confirmDelete = (id,playerName) =>{
        if(window.confirm(`Confirm you want to remove ${playerName} from roster`)){
            deleteAPI(id);

        }
        setDeleteReq(true)
    }

    const GameOneHandler = (gameOne,id) => {
        updateAPI({gameOne: gameOne},id);
    }
    const GameTwoHandler = (gameTwo,id) => {
        updateAPI({gameTwo: gameTwo},id);
    }
    const GameThreeHandler = (gameThree,id) => {
        updateAPI({gameThree: gameThree},id);
    }

    return (
        <div style={{textAlign:"center", padding:"30px"}}>
            <Link to="/new" className="links">Add New Player</Link>
                {
            players.sort((a,b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1:-1).map((player,idx) =>
                <div key={idx} >
                    <h3><Link to={`/show/${player._id}`}>{player.name}</Link></h3>
                    <p>{player.position}</p>
                    <p>Game 1<input 
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
                        type="button" 
                        checked={player.gameThree}
                        onChange={e => GameThreeHandler(e.target.checked, player._id)}/>
                    </p>
                    {/* {deleteReq?
                            <button className="firstDelete" onClick={e => setDeleteReq(false)}>Delete</button>:
                        <div>
                            <p style={{color:"red", fontWeight:"bold"}}>Confirm Delete?</p>
                            <button className="cancelDelete" onClick={e => setDeleteReq(true)}>Cancel</button>
                            <button style={{backgroundColor:"red", color:"black", fontWeight:"bold"}} className="confirmDelete"onClick={e => confirmDelete(player._id)}>Delete</button>
                        </div>}
 */}
                    <button style={{backgroundColor:"darkRed", 
                    color:"pink", 
                    fontWeight:"bold",
                    borderRadius:"10px"
                        }} 
                    onClick={ e => confirmDelete(player._id,player.name)}>Remove From Roster</button>
                </div>
            )
            }


        </div>
    )
}

export default List