import React from 'react';

const SingleToDo = (props) => {
    return (
        <li>{props.todo}<button onClick={props.delete}>x</button></li>
    );
};

export default SingleToDo;
