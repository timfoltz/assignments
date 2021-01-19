import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { Link, navigate} from '@reach/router';
// import { response } from 'express';

const DisplayProjectRequests = ({project,id, removeFromDom}) =>{
    // const deleteThisProj = id

    const deleteProject = (projectId) => {
        axios.delete('http://localhost:8000/api/view/delete/' + projectId)
        .then(res => {
            removeFromDom(projectId);
        })
    }
    

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
                    <button 
                    style={{backgroundColor:"red", borderRadius:"10px"}}
                    onClick={(e)=>{deleteProject(data._id)}}>
                        Delete Project
                        </button>
                </div>
            )}
            </div>
            {JSON.stringify(project)}
        </div>
    )


}

export default DisplayProjectRequests
