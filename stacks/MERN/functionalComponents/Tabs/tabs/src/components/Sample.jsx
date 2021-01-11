import React, { useState} from 'react'
import { Transition } from 'react-transition-group';

const AComponent = ({ in: inProp }) => (

    

    <Transition in={inProp} timeout={500}>
        {state => (
        <div>
            I am {state}
        </div>
        )}
    </Transition>
    ); 

export default AComponent