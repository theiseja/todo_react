import React from 'react';

const TodoForm = ({addTodo}) => {
    // input tracker
    let input;

    return (
        <div>
            <input ref={node => {
                input = node;
            }} />
        </div>
    )
}

export default TodoForm;