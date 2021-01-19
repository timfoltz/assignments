/* eslint-disable import/no-anonymous-default-export */
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router'

export default props =>{
    const [project, setProject] = useState([])
    const [errors, setErrors] = useState("")
    useEffect(() => {
        axios.get("http://localhost:8000/api/view/" + props.id)
        .then(res => {setProject(res.data)
        })
        .catch(err=>{
            console.log("There is an error:==========>",err)
        })
    },[])
    // const removeFromDom = projectId =>{
    //     setProjectsList(projectsList.filter(project => project._id !==projectId));
    // }

    const deleteProject = (projectId) => {
        axios.delete('http://localhost:8000/api/view/delete/' + projectId)
        .then(res => {
            // removeFromDom(projectId);
            navigate("/project")
        })
    }

    return (
        <div>
            <Link to= '/project'>Back to main</Link>
            <p>Title: {project.title}</p>
            <p>Price: {project.price}.00</p>
            <p>Description: {project.description}</p>
            <Link to= {`/view/update/${props.id}`}>
                        Edit this project
                    </Link>
                    <br></br>
                    <button 
            style={{backgroundColor:"red", borderRadius:"10px"}}
            onClick={(e)=>{deleteProject(project._id)}}>
                Delete Project
                </button>
        </div>
    )

}