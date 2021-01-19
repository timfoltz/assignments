/* eslint-disable import/no-anonymous-default-export */
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from '@reach/router'

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

    return (
        <div>
            <Link to= '/project'>Back to main</Link>
            <p>Title: {project.title}</p>
            <p>Price: {project.price}.00</p>
            <p>Description: {project.description}</p>
        </div>
    )

}