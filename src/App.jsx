import React, { useState, useEffect } from 'react';
import TasksList from './TasksList';
import FormTask from './FormTask';
import './App.css';
import { use } from 'react';

const LSKEY = "MyTodoApp";



function App() {
  const myData = JSON.parse(window.localStorage.getItem(LSKEY+".todos"))
  const [todos, setTodos] = useState(myData);

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

  const deleteTask = (id) => {
    setTodos(todos.map(elem => {
      return elem.id != id ? elem : null
    }).filter(item => item !== null));
  }

  const deleteAllDoneTasks = () => {
      setTodos(todos.map(elem => {
        return !elem.done ? elem : null
      }).filter(item => item !== null));
  }

  // Save todos to localStorage
  useEffect(() => {
    window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
    var data=JSON.parse(localStorage.getItem("variable_name"));
  }, [todos]);

 

  return (
    <div>
      <h1>Todo App</h1>
      <FormTask addTodo={addTodo} />
      <TasksList todos={todos} handleCheck = {handleCheck} deleteTask = {deleteTask} deleteAllDoneTasks = {deleteAllDoneTasks} />
    </div>
  );
}

export default App;