import React from 'react';

const Dial = (props) => {
    return (
        <div style={{border: '2px solid coral', margin: '5px'}}>
            <h1>This is Dial</h1>
            <h2>Steps so far: {props.steps}</h2>
        </div>
    );
};

export default Dial;