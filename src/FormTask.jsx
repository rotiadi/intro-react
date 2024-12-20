import React, { useState } from 'react';


const FormTask=({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Work');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo({
        id: Date.now(), // Unique ID
        name: inputValue,
        done: false,
        category: selectedCategory,
      });
      setInputValue(''); // Clear input
    }
  };

  const handleChangeCategory = (e) => {
    setSelectedCategory(e.target.value);
  }

  return (
   <>
        <form onSubmit={handleSubmit} className='mb-5'>
        <input
        className='form-control mb-2 w3-xxlarge'
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new todo"
        />
        <select name="category" id="category"  className='form-select form-select-lg mb-2' value={selectedCategory} onChange={handleChangeCategory}>
            <option value={'Personal'}> Personal</option>
            <option value={'Work'}> Work</option>

        </select>
        <button type="submit" className='w3-button w3-round w3-green w3-hover-black w3-large'>Add</button>
        </form>
       
   </>
  );
}

export default FormTask;