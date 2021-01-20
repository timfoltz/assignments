import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from '@reach/router'



const Create = (props) =>{

    return (
        <div>This is Create
            <Link to="/" style={{color:'black', background:"gray", borderRadius:"10px", width:"80px", textDecoration:"none"}}>Home</Link>



        </div>
    )
}

export default Create