import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from '@reach/router';



const pst = ({todos}) =>{

    return (
        <div style={{textAlign:"center"}}>
            <Link to="/new" style={{color:'black', background:"gray", borderRadius:"10px", width:"80px", textDecoration:"none"}}>Create New</Link>
                {
            todos.map((todo,idx) =>
                <div key={idx} style={{border: "1px solid lightBlue", margin:"5px"}}>
                    <h3><Link to={`/show/${todo._id}`}>{todo.title}</Link></h3>
                    <p>{todo.desc}</p>
                    <p style={{border:"1px solid green"}}>Completed:
                        <input type="checkbox" value={todo.completed}/>
                    </p>
                </div>
            )
            }


        </div>
    )
}

export default pst