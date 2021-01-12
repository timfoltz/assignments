import React from 'react';


const ViewPoke = ({poke,idx}) =>{


    return (
        <li key={idx}>{poke.name}</li>



    )

}
export default ViewPoke;

