/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

export default props =>{

    const {id} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/api/view/' + id)
        .then(res => {
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description)
        })
    }, [])
    const updateProject = e =>{
        e.preventDefault();
        axios.put('http://localhost:8000/api/view/update/' + id, {
            title,
            price,
            description
        })
        .then(res => {
            console.log(res);
            navigate("/project")
        })
    }
    return(
        <div>

            <h1>Update a project</h1>
            <Link to= '/project'>Back to main</Link>
            <form onSubmit={updateProject}>
                <p>
                <label htmlFor="title">Title</label>
                <input type="text" 
                name="title" 
                value={title}
                onChange ={e => setTitle(e.target.value)}/>
                </p>
                
                <p>
                <label htmlFor="Price">Price</label>
                <input type="text" 
                name="Price" 
                value = {price}
                onChange ={e => setPrice(e.target.value)}/>
                </p>
                <p>
                <label htmlFor="Description">Description</label>
                <input type="text" 
                name="Description" 
                value={description}
                onChange ={e => setDescription(e.target.value)}/>
                </p>
                <input type="submit" value="Submit"/>
            </form>



        </div>
    )

}