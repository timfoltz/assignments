import { useState, useEffect } from 'react';
import axios from 'axios'
import {Link, navigate} from '@reach/router'


const Edit = ({id,updateAPI}) =>{

    const [title,setTitle] = useState("")
    const [position,setPosition] = useState("")
    const [gameOne, setGameOne] = useState()
    const [errorMessages, setErrorMessagess] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8888/todos/${id}`)
            .then(res =>{
                console.log(res);
                setTitle(res.data.title)
                setPosition(res.data.position)
            })
            .catch(err =>{
                console.log(err);
            })
    },[id])

    const formHandler = (e) => {
        e.preventDefault();

        const updatedTodo = {
            title: title,
            position:position
        }

        updateAPI(updatedTodo, id);
        navigate("/")
    }


    return (

        <div style={{marginTop:"40px"}}>
        <Link to="/" className="links">Home</Link>
        <Link className="links" to={`/show/${id}`} >Back</Link>

        <form onSubmit={formHandler}>
            {errorMessages.map((error,idx)=><p key={idx} style={{color:"red"}}>{error}</p>)}
            <p>title:</p>
            {title.length >0 && title.length <3 ? <p className="errorP">title Must be at least 3 characters!</p>: ""}
            <input 
                type="text" 
                required
                value={title} 
                onChange= {e =>setTitle(e.target.value)}/>
            <p>positionription:</p>
            {position.length >0 && position.length <5 ? <p className="errorP">positionription Must be at least 5 characters!</p>: ""}

            <input 
                type="text" 
                required
                value={position} 
                onChange= {e => setPosition(e.target.value)}/>
                <br/>
            <input type="submit" value="Create"/>
        </form>


    </div>

        
    )
}


export default Edit