import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from '@reach/router';




const List = ({todos, updateAPI, deleteAPI}) =>{

    const checkBoxHandler = (completed,id) => {
        // const status = !completed;
        updateAPI({completed: completed},id)
    }

    return (
        <div style={{textAlign:"center", padding:"30px"}}>
            <Link to="/new" className="links">Create New</Link>
                {
            todos.map((todo,idx) =>
                <div key={idx} >
                    <h3><Link to={`/show/${todo._id}`}>{todo.title}</Link></h3>
                    <p>{todo.desc}</p>
                    <p>Completed:
                        <input 
                        type="checkbox" 
                        checked={todo.completed} 
                        onChange={e =>checkBoxHandler(e.target.checked,todo._id)} />
                    </p>
                    <button onClick={e => deleteAPI(todo._id)}>Delete</button>
                </div>
            )
            }


        </div>
    )
}

export default List