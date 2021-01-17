import React, {useState} from 'react';
import axios from 'axios';


const PersonForm = (props) =>{
    
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/people',{
            firstName,
            lastName
        })
            .then(res=>console.log("Response: ", res))
            .catch(err=>console.log("Error: ", err))

    }
    
    return(
        <form onSubmit={onSubmitHandler}>
            <p>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" onChange ={e => setFirstName(e.target.value)}/>
            </p>
                
            <p>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" onChange ={e => setLastName(e.target.value)}/>
            </p>
            <input type="submit" value="Submit"/>
        </form>
    )
}



export default PersonForm