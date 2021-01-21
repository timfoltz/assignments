import { useState, useEffect } from 'react';
import axios from 'axios'
import {Link} from "@reach/router"
// import '../App.css'


const Author = ({id}) =>{

    const [author, setAuthor] = useState({
        createdAt: Date.now(),
        name: "",
        updatedAt: Date.now()
    });

    useEffect(()=>{
        axios.get(`http://localhost:8888/authors/${id}`)
            .then(res =>{
                console.log(res);
                setAuthor(res.data)
            })
            .catch(err =>{
                console.log(err);
            })
    },[])

    return (
        <div style={{padding: "30px"}}>

            <Link className="links" to="/" >Home</Link>
            <p>{author.name}</p>
            <Link className="links" to={`/edit/${author._id}`} >Edit {author.name}</Link>



        </div>
    )
}

export default Author