import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskList from "./components/TaskList.jsx";
import Task from "./components/Task.jsx";

function App() {


  return (
      <div className= "App">
          <Task/>
          <TaskList/>
      </div>
  )
}

export default App
