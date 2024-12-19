import React, { useState, useEffect } from 'react';
import TasksList from './TasksList';
import FormTask from './FormTask';
import './App.css';

const LSKEY = "MyTodoApp";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleCheck = (id) => {
    setTodos( todos.map( todo => {
        if(todo.id === id) {
          return {
            ...todo,
            done: !todo.done
          }
        }
        return todo }
      )
    )
  }

  // Save todos to localStorage
  useEffect(() => {
    window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <h1>Todo App</h1>
      <FormTask addTodo={addTodo} />
      <TasksList todos={todos} handleCheck = {handleCheck} />
    </div>
  );
}

export default App;