
import React from 'react';


const Todo = ({todo, handleDelete}) => {
    const handleClick = (e) => {
        e.preventDefault()
        handleDelete(e.currentTarget.id)
    }

    return (
        <div id={todo.id} onDoubleClick={handleClick}>
            {todo.task}
        </div>
    );
};

export default Todo;
