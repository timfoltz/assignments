import React from 'react';

const PersonCard = props => {
        return(
            <div>
                <h1>{props.lastName}, {props.firstName}</h1>
                <p>Age:{props.age}</p>
                <p>Hair Color:{props.hairColor}</p>
                {/* <button onClick= { this.happyBirthday }>Birthday Button for {firstName} {lastName}</button> */}
            </div>
        );
    }
    // happyBirthday = () =>{
    //     const newAge = this.state.age +1;
    //     this.setState(() => { 
    //         return {age: newAge};
    //     });
    // }


export default PersonCard;