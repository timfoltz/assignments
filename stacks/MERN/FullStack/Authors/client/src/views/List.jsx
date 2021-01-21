import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from '@reach/router';



const List = ({authors}) =>{

    return (
        <div style={{textAlign:"center", padding:"30px"}}>
            <Link to="/new" className="links">Add New Author</Link>
                {
            authors.sort((a,b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1:-1).map((author,idx) =>
                <div key={idx} >
                    <h3><Link to={`/show/${author._id}`}>{author.name}</Link></h3>
                    <p>{author.name}</p>
                </div>
            )
            }


        </div>
    )
}

export default List