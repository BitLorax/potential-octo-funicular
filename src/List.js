
import React from 'react';
import Todo from './Todo';


const List = ({todoList, handleDelete}) => {
    return (
        <div>
            {todoList.map(todo => {
                return (
                    <Todo todo={todo} handleDelete={handleDelete}/>
                )
            })}
        </div>
    );
}

export default List;
