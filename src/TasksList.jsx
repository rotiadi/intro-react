import React, { useEffect } from 'react';

const  TaskList = ({ todos, handleCheck, deleteTask, deleteAllDoneTasks }) => {

 
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input 
            type="checkbox" 
            id={todo.id}
            name={todo.name} 
            checked={todo.done}
            onChange={() => handleCheck(todo.id)}/> {todo.name}
            <button className='delete-btn' disabled={!todo.done}  onClick={() => deleteTask(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div className='Results'>{todos.length -  todos.filter((elem) => elem.done).length} todos left
        <button className='delete-all-btn' onClick={deleteAllDoneTasks}>Delete All Done</button>
      </div>
    </>
  );
}

export default TaskList;