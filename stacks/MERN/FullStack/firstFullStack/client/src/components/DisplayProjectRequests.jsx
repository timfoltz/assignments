import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { Link } from '@reach/router';
// import { response } from 'express';

const DisplayProjectRequests = ({project}) =>{

    // const [database, setDatabase] = useState([]);

    // useEffect (() =>{
    //     axios.get('http://localhost:8000/api/view/projects',)
    //     .then(res=>{
    //         setDatabase(res.data.projects)
    //     })
    //     .catch(err=>{
    //         console.log("There was an error: ",err)
    //     })
    // },[]);

    return(
        <div>
            <div style={{display:"flex", justifyContent:"center"}}>{
                project.map((data,idx) =>
            
                <div style={{border:"1px solid black", width:"400px"}}>
                    <Link to= {`/view/${data._id}`}>
                        {data.title}
                    </Link>
                <p>{data._id} </p>
                <p> {data.title}</p>
                    <p key={idx+data._id}>${data.price}.00</p>
                    <p key={idx+data._id}>{data.description}</p>
                </div>
            )}
            </div>
            {JSON.stringify(project)}
        </div>
    )


}

export default DisplayProjectRequests
