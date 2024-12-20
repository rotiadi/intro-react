import React, { useState,  useEffect } from 'react';

const  TaskList = ({ todos, handleCheck, deleteTask, deleteAllDoneTasks}) => {
  
  const [filteredData, setfilteredData] = useState(todos)
  const [filter, setFilter] = useState({name: "", category: ""});

  const filterTask = (searchField,  searchText) => {
    if(searchField === 'name')
      changeFilterName(searchText);
    if(searchField === 'category')
      changeFilterCategory(searchText);
    
    setfilteredData(todos.filter(todo => 
            todo.name.toLowerCase().includes(filter.name.toLowerCase()) &&
            todo.category.toLowerCase().includes(filter.category.toLowerCase()) 
          ))      
  
  }
  
  const changeFilterName = (searchText) => {
    setFilter(previousState => {
      return { ...previousState, name: searchText }
    });
  }

  const changeFilterCategory = (searchText) => {
    setFilter(previousState => {
      return { ...previousState, category: searchText }
    });
   
  }

  useEffect(() => {
    filterTask("","");
  }, [filter, todos])
 
  return (
    <>
      <table>
        <thead>
          <tr>
            <th className='header-table'>Completed</th>
            <th className='header-table'>Task</th>
            <th className='header-table'>Category</th>
            <th className='header-table'></th>
          </tr>
          <tr>
            <th></th>
            <th className='input-serch-header'><input type="text"  onChange={(e) =>  filterTask('name',  e.target.value)}/></th>
            <th className='input-serch-header'><input type="text" onChange={(e) =>  filterTask('category', e.target.value)}/></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(todo => (
            <tr key={todo.id}>
              <td className='checkBox-col'>
                <input 
                  className='check'
                  type="checkbox" 
                  id={todo.id}
                  name={todo.name} 
                  checked={todo.done}
                  onChange={() => handleCheck(todo.id)}/>
              </td>
              <td>{todo.name}</td>
              <td>{todo.category}</td>
              <td className='button-col'> <button className='delete-btn' disabled={!todo.done}  onClick={() => deleteTask(todo.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>


      <div className='Results'>{todos.length -  todos.filter((elem) => elem.done).length} todos left
        <button className='delete-all-btn' disabled={todos.filter((elem) => elem.done).length === 0 } onClick={deleteAllDoneTasks}>Delete All Done</button>
      </div>
    </>
  );
}

export default TaskList;