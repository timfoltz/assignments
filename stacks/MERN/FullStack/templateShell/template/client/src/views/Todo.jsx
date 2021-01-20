import { useState, useEffect } from 'react';
import axios from 'axios'
import {Link} from "@reach/router"


const Todo = (props) =>{

    return (
        <div>This is Todo
            <Link to="/" style={{color:'black', background:"gray", borderRadius:"10px", width:"80px", textDecoration:"none"}}>Home</Link>



        </div>
    )
}

export default Todo