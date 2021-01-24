import { useState, useEffect } from 'react';
import axios from 'axios'
import {Link} from "@reach/router"
// import '../App.css'


const Todo = ({id, updateAPI}) =>{

    const [todo, setTodo] = useState({
        completed: false,
        createdAt: Date.now(),
        desc: "",
        title: "",
        updatedAt: Date.now()
    });

    useEffect(()=>{
        axios.get(`http://localhost:8888/todos/${id}`)
            .then(res =>{
                console.log(res);
                setTodo(res.data)
            })
            .catch(err =>{
                console.log(err);
            })
    },[id])

    const checkBoxHandler = (completed,id) => {
        const changedTodo = {...todo};
        changedTodo.completed = completed;
        setTodo(changedTodo);
        updateAPI({completed: completed},id);
    }



    return (
        <div style={{padding: "30px"}}>

            <Link className="links" to="/" >Home</Link>
            <p>{todo.title}</p>
            <p>{todo.desc}</p>
            <p>{todo._id}</p>
            <p><input 
                type="checkbox" 
                checked={todo.completed}
                onChange={e => checkBoxHandler(e.target.checked, todo._id)}/>
            </p>
            <Link className="links" to={`/edit/${id}`} >Edit</Link>



        </div>
    )
}

export default Todo