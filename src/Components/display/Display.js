import React from 'react';
import Dial from '../Dial/Dial';

const Display = (props) => {
    console.log(props)
    return (
        <div style={{border: '2px solid green', margin: '5px'}}>
            <h1>Name: {props.name}</h1>
            <h2>So far steps today: {props.steps}</h2>
            <Dial steps={props.steps}></Dial>
        </div>
    );
};

export default Display;