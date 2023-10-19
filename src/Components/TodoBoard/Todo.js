import React, { useState } from 'react'
import CreateTask from './CreateTask';
import ListTasks from './ListTasks';

const Todo = () => {
const [tasks , setTasks] = useState([]);
 
  return (
    <div className='bg-slate-100 w-screen h-screen flex flex-col items-center p-20 gap-16 '>
        <h1 className='font-bold'>Task Board</h1>
        <CreateTask tasks={tasks} setTasks= {setTasks}/>
        <ListTasks tasks={tasks} setTasks= {setTasks}/>
    </div>
  )
}

export default Todo