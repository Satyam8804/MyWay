import React, { useState } from 'react'

import {v4 as uuidv4} from 'uuid'

const CreateTask = ({tasks,setTasks}) => {
    const [task, setTask] = useState({
        id:"",
        name:"",
        status:"todo"
    })

    console.log(task)
  return (
    <form>
        <input 
        type="text"  
        className='bg-slate-200 px-1 border-2 rounded-md h-10 w-64'
        placeholder='Enter Your Task Here ...'
         value = {task.name}
       onChange={(e)=>setTask({...task,
        id: uuidv4(),
        name:e.target.value
       })}
         />
        <input type="submit" value="Submit" className='bg-green-500 px-4 rounded-md ml-3 h-10'/>
    </form>
  )
}

export default CreateTask