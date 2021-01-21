import { useState, useEffect } from 'react';
import axios from 'axios'
import {Link, navigate} from '@reach/router'


const Edit = ({id,deleteHandler}) =>{
    
        const [name,setName] = useState("")
        const [errorMessages, setErrorMessages] = useState([])
        // const [author, setAuthor] = useState({
        //     createdAt: Date.now(),
        //     name: "",
        //     updatedAt: Date.now()
        // });


        useEffect(()=>{
            axios.get("http://localhost:8888/authors/"+id)
                .then(res =>{
                    console.log("=========> res from API ",res);
                    setName(res.data.name)
                    // setName(author.name)
                })
                .catch(err =>{
                    console.log(err);
                })
        },[])

        const updateHandler = (e) =>{
            e.preventDefault();
            console.log("Got the request for update")
            
            axios.put('http://localhost:8888/authors/' +id,{
                "name":name
            })
            .then(res =>{
                console.log("Received a response to request",res)
                navigate("/")
            })
            .catch(err =>{
                const errors = err.response.data.errors;
                const errorArr=[];
                for(const key of Object.keys(errors)){
                    errorArr.push(errors[key].message)
                }
                setErrorMessages(errorArr)
    
                console.log(errorArr)
    
            })
        }
        
        const handleDelete = (e) =>{
            e.preventDefault();
            console.log("delete this Author")
            deleteHandler(id);
        }

        return (
            <div style={{marginTop:"40px"}}>
                <Link to="/" className="links">Home</Link>
                <form onSubmit={updateHandler}>
                    <p>Name:</p>
                    {errorMessages.map((error,idx)=><p key={idx} style={{color:"red"}}>{error}</p>)}
    
                    <input 
                        type="text" 
                        value={name} 
                        onChange= {e =>setName(e.target.value)}/>
                    <input type="submit" value="Submit Change"/>
                </form>
                <form onSubmit={handleDelete}>
                    <p>Delete here</p>
                <input type="submit" value="Delete"/>
                </form>
    
    
            </div>
        )
}


export default Edit