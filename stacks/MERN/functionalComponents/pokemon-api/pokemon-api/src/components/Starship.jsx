import React from 'react';
import {Link} from '@reach/router';


const Starship = ({searchResult}) =>{






    return(
        <div>
            {
            searchResult.map((ship, idx) =>
        <div style={{textAlign:"center"}}>
            <h1>Starships Of Star Wars</h1>
                <h2>{ship.name}</h2>
            <div style={{display:"flex", justifyContent:"center"}}>
                <h3>Model:</h3>
                <p>{ship.model}</p>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <h3>Class:</h3>
                <p>{ship.starship_class}</p>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <h3>Crew:</h3>
                <p>{ship.crew}</p>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <h3>Hyperdrive Rating:</h3>
                <p>{ship.hyperdrive_ating}</p>
            </div>
        
        </div>
        )}

        </div>

    )
}
export default Starship