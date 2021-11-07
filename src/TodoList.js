
import React, { useState } from 'react'
import data from './data.json'
import List from './List.js'


export default function TodoList() {
    const [todoList, setTodoList] = useState(data)
    const [userInput, setUserInput] = useState('');

    const handleDelete = (id) => {
        let newList = todoList.filter(task => {
            return task.id !== Number(id);
        });
        setTodoList(newList);
    }
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const addTask = (userInput) => {
        let newList = [...todoList, {id: todoList.length + 1, task: userInput}];
        setTodoList(newList);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }

    return (
        <div className='todoListMain'>
            <div className='header'>
                <p>{todoList.length}</p>
                <form onSubmit={handleSubmit}>
                    <input value={userInput} placeholder='Enter new task' onChange={handleChange}></input>
                    <button type='submit'>Add</button>
                </form>
            </div>
            <List todoList={todoList} handleDelete={handleDelete}/>
        </div>
    )
}

