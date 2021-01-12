import React from 'react';
import {Link} from '@reach/router';


const Colors = (props) =>{






    return(

        <h2 style={{backgroundColor:props.bgcolor, color:props.color}}>
            The word is {props.word}
        </h2>

    )
}
export default Colors