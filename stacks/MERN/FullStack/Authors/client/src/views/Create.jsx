import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router'



const Create = ({addAuthor}) =>{

    const [name,setName] = useState("")
    const [errorMessages, setErrorMessagess] = useState([])

    const newAuthor ={
        name: name
    }

    const formHandler =(e) =>{
        e.preventDefault();
        axios.post("http://localhost:8888/authors", newAuthor)
        .then(res =>{
            console.log(res)
            addAuthor(res.data)
            navigate("/")
        })
        .catch(err =>{
            const errors = err.response.data.errors;
            const errorArr=[];
            for(const key of Object.keys(errors)){
                errorArr.push(errors[key].message)
            }
            setErrorMessagess(errorArr)

            console.log(errorArr)

        })
    }

    return (
        <div style={{marginTop:"40px"}}>
            <Link to="/" className="links">Home</Link>
            <form onSubmit={formHandler}>
                {errorMessages.map((error,idx)=><p key={idx} style={{color:"red"}}>{error}</p>)}
                <p>Name:</p>

                <input 
                    type="text" 
                    value={name} 
                    onChange= {e =>setName(e.target.value)}/>
                <input type="submit" value="Add Author"/>
            </form>


        </div>
    )
}

export default Create