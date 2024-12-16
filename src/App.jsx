import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './FormTask.jsx'
import FormTask from  './FormTask.jsx'
import HeaderTask from './HeaderTask.jsx'
import TasksList from "./TasksList.jsx"

function App() {
 
   return (
    <div>
      <HeaderTask />
      <FormTask />
      <TasksList />
    </div>
         
  ) 
}

export default App
