import React, { useState,  useEffect } from 'react';

const  TaskList = ({ todos, handleCheck, deleteTask, deleteAllDoneTasks}) => {
  
  const [filteredData, setfilteredData] = useState(todos)
  const [filter, setFilter] = useState({name: "", category: "", done: "All"});

  const filterTask = (searchField,  searchText) => {
    if(searchField === 'name')
      changeFilterName(searchText);
    if(searchField === 'category')
      changeFilterCategory(searchText);
    if(searchField === 'done' ){
      changeFilterDone(searchText);
          
    }
    
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

  const changeFilterDone = (searchText) => {
    setFilter(previousState => {
      return { ...previousState, done: searchText }
    });
  }

  const handleCheckAll = () => {

    filteredData.filter(task => task.done === false).forEach(element => {
      handleCheck(element.id);
    });
  }

  useEffect(() => {
    filterTask("","");
  }, [filter, todos])
 
  return (
    <>
      <table className='table table-hover '>
        <thead className="table-success">
          <tr>
            <th>Completed</th>
            <th>Task</th>
            <th>Category</th>
            <th></th>
          </tr>
          <tr>
            <th>
            </th>
            <th><input type="text"  onChange={(e) =>  filterTask('name',  e.target.value)}/></th>
            <th><input type="text" onChange={(e) =>  filterTask('category', e.target.value)}/></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(todo => (
            <tr key={todo.id}>
              <td>
                <input 
                  className='form-check-input'
                  type="checkbox" 
                  id={todo.id}
                  name={todo.name} 
                  checked={todo.done}
                  onChange={() => handleCheck(todo.id)}/>
              </td>
              <td className='w3-large'>{todo.name}</td>
              <td>{todo.category}</td>
              <td> <button className='w3-button w3-round w3-red' disabled={!todo.done}  onClick={() => deleteTask(todo.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>


      <div>
        <p className='w3-serif w3-xxlarge w3-text-blue'>{todos.length -  todos.filter((elem) => elem.done).length} todos left </p>
        <button className='w3-button w3-round w3-red w3-margin' disabled={todos.filter((elem) => elem.done).length === 0 } onClick={deleteAllDoneTasks}>Delete All Done</button>
      </div>
    </>
  );
}

export default TaskList;