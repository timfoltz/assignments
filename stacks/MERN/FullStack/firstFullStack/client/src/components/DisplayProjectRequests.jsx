import React, {useState, useEffect} from 'react';
import axios from 'axios'
// import { response } from 'express';

const DisplayProjectRequests = (props) =>{

    const [database, setDatabase] = useState([]);

    useEffect (() =>{
        axios.get('http://localhost:8000/api/view/projects',)
        .then(res=>{
            setDatabase(res.data.projects)
        })
        .catch(err=>{
            console.log("There was an error: ",err)
        })
    },[]);

    return(
        <div>
            <div style={{display:"flex", justifyContent:"center"}}>{
            database.map((data,idx) =>
            
            <div style={{border:"1px solid black", width:"400px"}}>
            <p key={idx+data._id}>{data.title}</p>
            <p key={idx+data._id}>${data.price}.00</p>
            <p key={idx+data._id}>{data.description}</p>
            </div>
            )
            }</div>
            {JSON.stringify(database)}
        </div>
    )


}

export default DisplayProjectRequests