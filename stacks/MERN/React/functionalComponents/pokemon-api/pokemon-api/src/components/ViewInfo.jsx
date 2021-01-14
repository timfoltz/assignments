import React,{useState,useEffect} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';



const ViewInfo = ({type,id}) =>{

    const [selectSearchType, setSelectSearchType] = useState("")
    const [selectIndexNumber, setSelectIndexNumber] = useState("")
    const [searchResult, setSearchResult] = useState({})
	const [homeworld, setHomeworld] = useState([])
	const [homeID, setHomeID] = useState("")
	const [peopleType, setPeopleType] = useState(false)
	const [planetsType, setPlanetsType] = useState(false)
	const [starshipsType, setStarshipsType] = useState(false)

    useEffect(() =>{
        axios.get(`https://swapi.dev/api/${type}/${id}/`)
			.then(response=>{
                setSearchResult(response.data)
                if(type === "planets"){
                    setPlanetsType(true)
                    setPeopleType(false)
                    setStarshipsType(false)
                }
                if(type === "starships"){
                    setStarshipsType(true)
                    setPlanetsType(false)
                    setPeopleType(false)
                }
                if(type === "people"){
                    const homeworldUrl = response.data.homeworld;
                    setPeopleType(true)
                    setPlanetsType(false)
                    setStarshipsType(false)
                    axios.get(homeworldUrl)
                        .then(response=>{
                            setHomeworld([response.data.name])
                            const resHomeID = homeworldUrl.split("/")
                            setHomeID(resHomeID.filter(val=> val>0))
                        })
                }
                // navigate(`/${selectSearchType}/${selectIndexNumber}/`)
            })
		.catch(err=>{
			navigate('/error/')
			});
    },[type,id]);


    return(
        <div>
        {JSON.stringify("People:"+peopleType)}<br></br>
        {JSON.stringify("Planets:"+planetsType)}<br></br>
        {JSON.stringify("StarShips:"+starshipsType)}<br></br>

        { peopleType ?
            <div style={{textAlign:"center"}}>
            <h1>People Of Star Wars</h1>
                <h3>{searchResult.name}</h3>
            <div style={{display:"block", justifyContent:"center"}}>
                <h3>Height:</h3>
                <p style={{fontSize: "20px"}}>{searchResult.height}</p>
            </div>
            <div style={{display:"block", justifyContent:"center"}}>
                <h3>Mass:</h3>
                <p style={{fontSize: "20px"}}>{searchResult.mass}</p>
            </div>
            <div style={{display:"block", justifyContent:"center"}}>
                <h3>Hair Color:</h3>
                <p style={{fontSize: "20px"}}>{searchResult.hair_color}</p>
            </div>
            <div style={{display:"block", justifyContent:"center"}}>
                <h3>Eye Color:</h3>
                <p style={{fontSize: "20px"}}>{searchResult.eye_color}</p>
            </div>
            <div style={{display:"block", justifyContent:"center"}}>
                <h3>Homeworld:</h3>
                <Link to={`/planets/${homeID}`} style={{textDecoration:"none", color:"antiquewhite",fontSize:"20px"}}>{homeworld}</Link>
            </div>
        </div>:
        ""}
        { planetsType ?
            <div style={{textAlign:"center"}}>
            <h1>Planets Of Star Wars</h1>
                <h3>{searchResult.name}</h3>
            <div style={{display:"block", justifyContent:"center"}}>
                <h3>Climate:</h3>
                <p>{searchResult.climate}</p>
            </div>
            <div style={{display:"block", justifyContent:"center"}}>
                <h3>Terrain:</h3>
                <p>{searchResult.terrain}</p>
            </div>
            <div style={{display:"block", justifyContent:"center"}}>
                <h3>Population:</h3>
                <p>{searchResult.population}</p>
            </div>
            <div style={{display:"block", justifyContent:"center"}}>
                <h3>Orbital Period:</h3>
                <p>{searchResult.orbital_period} days</p>
            </div>
        
        </div>:
        ""}
        { starshipsType ?
        <div style={{textAlign:"center"}}>
            <h1>Starships Of Star Wars</h1>
                <h3>{searchResult.name}</h3>
            <div style={{display:"block", justifyContent:"center"}}>
                <h3>Model:</h3>
                <p>{searchResult.model}</p>
            </div>
            <div style={{display:"block", justifyContent:"center"}}>
                <h3>Class:</h3>
                <p>{searchResult.starship_class}</p>
            </div>
            <div style={{display:"block", justifyContent:"center"}}>
                <h3>Crew:</h3>
                <p>{searchResult.crew}</p>
            </div>
            <div style={{display:"block", justifyContent:"center"}}>
                <h3>Hyperdrive Rating:</h3>
                <p>{searchResult.hyperdrive_rating}</p>
            </div>
        
        </div>:
        ""}
    </div>
        
        
        // onClick={e => goToHomeworld(homeID)}
        

    )
}
export default ViewInfo



