import React, {useEffect, useState} from 'react';

import axios from 'axios';
import PersonForm from '../components/PersonForm';
import ProjectForm from '../components/ProjectForm';
import DisplayProjectRequests from '../components/DisplayProjectRequests';


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [message, setMessage] = useState("loading...");

    useEffect(() => {
        axios.get('http://localhost:8000/api')
            .then(res => 
                setMessage(res.data.message))
            
    }, []);

    return (
        <div>
            <ProjectForm />
            {JSON.stringify(message)}
            <PersonForm />
            <DisplayProjectRequests />
        </div>
    )

}