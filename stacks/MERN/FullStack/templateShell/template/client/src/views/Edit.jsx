import { useState, useEffect } from 'react';
import axios from 'axios'
import {Link} from '@reach/router'


const Edit = (props) =>{
    // const [title,setTitle] = useState("")
    // const [desc,setDesc] = useState("")
    // const [errorMessages, setErrorMessagess] = useState([])

    // const newTodo ={
    //     title: title,
    //     desc: desc
    // }

    // const formHandler =(e) =>{
    //     e.preventDefault();
    //     axios.post("http://localhost:8888/todos", newTodo)
    //     .then(res =>{
    //         console.log(res)
    //         addTodo(res.data)
    //         navigate('/')
    //     })
    //     .catch(err =>{
    //         const errors = err.response.data.errors;
    //         const errorArr=[];
    //         for(const key of Object.keys(errors)){
    //             errorArr.push(errors[key].message)
    //         }
    //         setErrorMessagess(errorArr)

    //         console.log(errorArr)

    //     })
    // }

    // return (
    //     <div style={{marginTop:"40px"}}>
    //         <Link to="/" className="links">Home</Link>
    //         <form onSubmit={formHandler}>
    //             {errorMessages.map((error,idx)=><p key={idx} style={{color:"red"}}>{error}</p>)}
    //             <p>Title:</p>

    //             <input 
    //                 type="text" 
    //                 value={title} 
    //                 onChange= {e =>setTitle(e.target.value)}/>
    //             <p>Description:</p>
    //             <input 
    //                 type="text" 
    //                 value={desc} 
    //                 onChange= {e => setDesc(e.target.value)}/>
    //                 <br/>
    //             <input type="submit" value="Create"/>
    //         </form>


    //     </div>
    // )
}


export default Edit