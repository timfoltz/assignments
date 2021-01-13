import React from 'react';
import {Link} from '@reach/router';


const People = ({searchResult,homeworld}) =>{






    return(
        <div>
            {searchResult.map((person, idx) =>
        <div style={{textAlign:"center"}}>
            <h1>People Of Star Wars</h1>
                <h2>{person.name}</h2>
            <div style={{display:"flex", justifyContent:"center"}}>
                <h3>Height:</h3>
                <p style={{fontSize: "20px"}}>{person.height}</p>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <h3>Mass:</h3>
                <p style={{fontSize: "20px"}}>{person.mass}</p>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <h3>Hair Color:</h3>
                <p style={{fontSize: "20px"}}>{person.hair_color}</p>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <h3>Eye Color:</h3>
                <p style={{fontSize: "20px"}}>{person.eye_color}</p>
            </div>
        
        </div>
            )}
            {homeworld.map((place, idx) =>
            <div style={{display:"flex", justifyContent:"center"}}>
                <h3>Homeworld:</h3>
                <p>{place}</p>
            </div>
            )}
        </div>

    )
}
export default People



