import React, {useEffect, useState} from 'react';

import axios from 'axios';
// import PersonForm from '../components/PersonForm';
import ProjectForm from '../components/ProjectForm';
import DisplayProjectRequests from '../components/DisplayProjectRequests';


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    const [projectsList, setProjectsList] = useState([]);
    const [loaded, setLoaded] = useState(false)

    useEffect (() =>{
        axios.get('http://localhost:8000/api/view/projects',)
        .then(res=>{
            setProjectsList(res.data.projects)
            setLoaded(true)
        })
        .catch(err=>{
            console.log("There was an error: ",err)
        })
    },[]);

    return (
        <div>
            <ProjectForm />
            <hr/>
            {loaded && <DisplayProjectRequests project={projectsList}/>}
        </div>
    )

}