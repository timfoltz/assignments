import React, { useState} from 'react'
import { TransitionGroup, CSSTransition, Transition } from 'react-transition-group';
// import styled from "styled-components";

import {Motion, spring} from 'react-motion'



const TabsDisplay = (props) =>{

   

    const{tabs, selected} = props;

    return(
        <div className="divName">
            <Motion defaultStyle={{x: -200, opacity: 0}} 
            style={{x: spring(0), opacity: spring(1) }}
            >
                {style=>(
                    <p className="tabNames" style ={{opacity: style.opacity, transform:`translateX(${style.x}px)`}}>{tabs[selected].content}
                    </p>
                )}
                
            </Motion>
        </div>
    )
    
}
export default TabsDisplay