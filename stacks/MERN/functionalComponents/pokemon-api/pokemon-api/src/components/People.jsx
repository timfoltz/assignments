import React from 'react';
import {Link, navigate} from '@reach/router';


const People = ({searchResult,homeworld,homeID,goToHomeworld}) =>{






    return(
        <div>
            {/* {JSON.stringify(searchResult)} */}
            {/* {searchResult.map((searchResult, idx) => */}
        <div style={{textAlign:"center"}}>
            <h1>People Of Star Wars</h1>
                <h2>{searchResult.name}</h2>
            <div style={{display:"flex", justifyContent:"center"}}>
                <h3>Height:</h3>
                <p style={{fontSize: "20px"}}>{searchResult.height}</p>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <h3>Mass:</h3>
                <p style={{fontSize: "20px"}}>{searchResult.mass}</p>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <h3>Hair Color:</h3>
                <p style={{fontSize: "20px"}}>{searchResult.hair_color}</p>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <h3>Eye Color:</h3>
                <p style={{fontSize: "20px"}}>{searchResult.eye_color}</p>
            </div>
        
        </div>
            {/* )} */}
            {/* {homeworld.map((place, idx) => */}
            <div style={{display:"flex", justifyContent:"center"}}>
                <h3>Homeworld:</h3>
                <p onClick={e => goToHomeworld(homeID)} style={{cursor:"pointer"}}>{homeworld}</p>
            </div>
            {/* )} */}
        </div>

    )
}
export default People



