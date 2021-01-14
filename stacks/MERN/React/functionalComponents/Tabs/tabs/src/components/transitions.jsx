import { useState } from 'react';
import { Transition } from 'react-transition-group';

const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
}

const transitionStyles = {
    entering: { opacity: 1 },
    entered:  { opacity: 1 },
    exiting:  { opacity: 0 },
    exited:  { opacity: 0 },
};

const Fade = ({ in: inProp }) => (
    <Transition in={inProp} timeout={duration}>
        {state => (
            <div style={{
            ...defaultStyle,
            ...transitionStyles[state]
            }}>
                I'm a fade Transition!
            </div>
        )}
    </Transition>
);

const App1 = (props) =>{
    const [inProp, setInProp] = useState(false);

    const duration = 300;

    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0,
    }

    const transitionStyles = {
        entering: { opacity: 1 },
        entered:  { opacity: 1 },
        exiting:  { opacity: 0 },
        exited:  { opacity: 0 },
    };

    const Fade = ({ in: inProp }) => (
        <Transition in={inProp} timeout={duration}>
            {state => (
                <div style={{
                ...defaultStyle,
                ...transitionStyles[state]
                }}>
                    I'm a fade Transition!
                </div>
            )}
        </Transition>
    );

        return (
            
            <div>
                
                <button onClick={() => setInProp(true)}>
                    Click To Enter
                </button>

            </div>

        )
}

export default App1;