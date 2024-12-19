import React from 'react';

const  TaskList = ({ todos, handleCheck }) => {


  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input 
          type="checkbox" 
          id={todo.id}
          name={todo.name} 
          checked={todo.done}
          onChange={() => handleCheck(todo.id)}/> {todo.name}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;