import React, { useEffect, useState } from 'react';
import Display from '../display/Display';
import Tablet from '../Tablet/Tablet';

//? statefull component
const Watch = () => {
    const [steps, setSteps] = useState(0);
    const increaseStep = () => {
        const newSteps = steps + 1;
        setSteps(newSteps) //? asynchronous function     
        // console.log(steps) //? jehetu setSteps() 1ta asynchronous function, tai value update hower agei console log hoye jabe. taile updated value console dekhabe na.
    };
    useEffect( () => {
        // console.log('hello')
        console.log(steps)
        
    // }, []) //? empty thakle ekbar exeucute hobe 
    // }) //? dependency na dile, jotobar UI render hobe totobar sideEffect execute hobe
}, [steps]); //? jotobar steps(state) er value change hobe totobar sideEffect execute hobe
    
    return (
        <div style={{border: '2px solid purple', margin: '20px'}}>
            <h1>smart watch!!!</h1>
            <h3>current steps: {steps}</h3>
            <button onClick={increaseStep}>De Dour............</button>
            <Display name="white" steps={steps}></Display>
            <Tablet></Tablet>
        </div>
    );
};

export default Watch;  