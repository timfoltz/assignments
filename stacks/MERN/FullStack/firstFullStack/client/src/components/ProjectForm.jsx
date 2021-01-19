import React, {useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';


const ProjectForm = ({setHasUpdated}) =>{
    
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/project',{
            title,
            price,
            description,
        })
            .then(res=> {setHasUpdated(true);
                        setHasUpdated(false)})
            .catch(err=>console.log("Error: ", err))

    }
    
    return(
        <div>
            <h1>Project Manager Request Form</h1>
            <form onSubmit={onSubmitHandler}>
                <p>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" onChange ={e => setTitle(e.target.value)}/>
                </p>
                
                <p>
                <label htmlFor="Price">Price</label>
                <input type="" name="Price" onChange ={e => setPrice(e.target.value)}/>
                </p>
                <p>
                <label htmlFor="Description">Description</label>
                <input type="textarea" name="Description" onChange ={e => setDescription(e.target.value)}/>
                </p>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}



export default ProjectForm