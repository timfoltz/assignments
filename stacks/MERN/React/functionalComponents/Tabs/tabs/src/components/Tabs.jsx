import './Tabs.css'
import React, { useState} from 'react'
import TabsDisplay from './Display'
import {Motion, spring} from 'react-motion'
// import styled from 'styled-components'



const Tabs = (props) =>{

    const [tabs, setTabs] = useState([
        {title:"dressing", content: "The question is in a way meaningless, she knows, but one must ask. Love in such situations is rarely real. Sex is the engine, exalting and ruining people, sex and frustration. Love is what people believe is worth the path of devastation."},
        {title:"coffee", content: "During the first part of your life, you only become aware of happiness once you have lost it. Then an age comes, a second one, in which you already know, at the moment when you begin to experience true happiness, that you are, at the end of the day, going to lose it. When I met Belle, I understood that I had just entered this second age. I also understood that I hadn’t reached the third age, in which anticipation of the loss of happiness prevents you from living."},
        {title:"contempt", content: "Your only chance of survival, if you are sincerely smitten, lies in hiding this fact from the woman you love, of feigning a casual detachment under all circumstances. What sadness there is in this simple observation! What an accusation against man! However, it had never occurred to me to contest this law, nor to imagine disobeying it: love makes you weak, and the weaker of the two is oppressed, tortured and finally killed by the other, who in his or her turn oppresses, tortures and kills without having evil intentions, without even getting pleasure from it, with complete indifference; that’s what men, normally, call love."},
        {title:"verdict", content: "Christ, he thinks, by my age I ought to know. You don’t get on by being original. You don’t get on by being bright. You don’t get on by being strong. You get on by being a subtle crook; somehow he thinks that’s what Norris is, and he feels an irrational dislike taking root, and he tries to dismiss it, because he prefers his dislikes rational, but after all, these circumstances are extreme, the cardinal in the mud, the humiliating tussle to get him back in the saddle, the talking, talking on the barge, and worse, the talking, talking on his knees, as if Wolsey’s unravelling, in a great unweaving of scarlet thread that might lead you back into a scarlet labyrinth, with a dying monster at its heart."},
        {title:"catalogue", content: "Is not this the kind of fasting I have chosen: to loose the chains of injustice and untie the cords of the yoke, to set the oppressed free and break every yoke?"},
    ]);
    const [selected, setSelected] = useState(0);
    const [show, setShow] = useState(true);
    const showHandler = () =>{
        setShow(true);
        // setShow(true);
        // setShow(false);
    }
    const tabHandler=(idx) => {
        setTimeout(setSelected(idx),1000);
        setShow(false);
        setTimeout(showHandler,300)
        
    }


    return (
        <div>
            
            <div  className="TabsHolder" >{
            tabs.map((val, idx)=>
            <div key={idx} className="TabsDiv" onClick={e => tabHandler(idx)}>
            <p>
                <a href="#">{val.title}</a>
            </p>
            </div>
            )
            
            }</div >
                <Motion defaultStyle={{x: -900, opacity: 0}} 
                style={{x: spring(show ? 0: -900), opacity: spring(show) }}
                >
                    {style => (
                    <div style={{opacity: style.opacity, transform:`translateX(${style.x}px)`}} className="ContentHolder">
                        <TabsDisplay tabs={tabs} selected={selected} />
                    </div>
                    )}
                </Motion>
        </div>
    )
}
export default Tabs