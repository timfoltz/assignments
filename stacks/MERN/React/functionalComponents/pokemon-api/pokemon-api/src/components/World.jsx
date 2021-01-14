import React from 'react';
import {Link} from '@reach/router';


const World = ({searchResult}) =>{






    return(
        <div>
            {/* {searchResult.map((planet, idx) => */}
        <div style={{textAlign:"center"}}>
            <h1>Planets Of Star Wars</h1>
                <h2>{searchResult.name}</h2>
            <div style={{display:"flex", justifyContent:"center"}}>
                <h3>Climate:</h3>
                <p>{searchResult.climate}</p>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <h3>Terrain:</h3>
                <p>{searchResult.terrain}</p>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <h3>Population:</h3>
                <p>{searchResult.population}</p>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <h3>Orbital Period:</h3>
                <p>{searchResult.orbital_period}</p>
            </div>
        
        </div>
        {/* )} */}

        </div>

    )
}
export default World