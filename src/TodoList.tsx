import React, { useState } from 'react';
import TodoFooter from './TodoFooter';
import "./todoList.css"

interface Todo {
    id: number,
    completed: boolean,
    task: string
}

interface Props {
    todos: Todo[],
    setTodos: any
}

const TodoList:React.FC<Props> = ({todos, setTodos}) => {

    const updateTask = (id: any) => {
        let updatedTasks = todos.map((todo) => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
                return todo
            } else {
                return todo
            }
        });
        setTodos(updatedTasks)
    }

    const calcNumberOfIncompletedTasks = () => {
        let count = 0;
        todos.forEach(todo => {
            if(!todo.completed) count++
        })
        return count
    }

    return(
        <div className="list-container">
            {
                todos.map((todo, index) => (
                    <div 
                        className={`todo-item ${todo.completed && "todo-item-active"}`} 
                        onClick={() => updateTask(todo.id)}
                    >
                        {todo.task}
                    </div>
                ))
            }
            <div className="footer-container">
            <TodoFooter 
                    numberOfIncompleteTasks={calcNumberOfIncompletedTasks()}
                />
            </div>
        </div>
    )
}

export default TodoList;