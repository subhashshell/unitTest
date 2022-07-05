import React, { useState } from 'react';
import AddInput from './AddInput';
import TodoList from './TodoList';

const Todo:React.FC = () => {

    const [todos, setTodos] = useState([]);
    return(
        <div>
            <h1>Todo List</h1>
            <AddInput setTodos={setTodos} todos={todos} />
            <TodoList setTodos={setTodos} todos={todos} />
        </div>
    )
}

export default Todo;