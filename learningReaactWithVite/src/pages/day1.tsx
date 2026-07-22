// Build this UI:
// Task Manager

// +------------------------------+
// | Enter Task          [Add]    |
// +------------------------------+

// ☐ Learn React
// ☐ Learn Express
// ☐ Build Portfolio

// Completed: 0

import React, { useState } from "react";


interface Data{
  id:number;
  text:string;
  done:boolean;
}
export default function Day1(){
const [taskInput,setTaskInput]=useState<string>('');
const [tasks,setTasks]=useState<Data[]>([{id:1,text:"Learn JS",done:false}])
const [nextId,setNextId]= useState<number>(2)
const handleAdd=(e:React.FormEvent)=>{
  e.preventDefault();
  if(taskInput.trim() !==''){
    setTasks([...tasks,{id:nextId,text:taskInput.trim(),done:false}])
    setNextId(nextId+1);
    setTaskInput('');
  }
}

const toggleTask=(id:number)=>{
  setTasks(
    tasks.map((task)=>task.id===id?{...task,done:!task.done}:task)
  )
}
const tasksDone=tasks.filter((task)=>task.done===true).length;
  return (
    <div className="w-full flex flex-col gap-2 p-2 justify-center items-center">
      <h1 className="text-2xl font-bold">Task Manager</h1>
      <form className="bg-gray-100 flex gap-2 p-4 rounded-xl" onSubmit={handleAdd}>
          <input className="border min-w-5.5 rounded-xl p-1 pl-2 " type="text" placeholder="Enter Tasks" value={taskInput} onChange={(e)=>setTaskInput(e.target.value)}/>
        <button className="bg-blue-500 text-white rounded-xl px-3 py-2">Add</button>
      </form>

      <div className="tasks-wrapper flex flex-col items-start">
      <h1 className="start text-xl strong">Completed Task: {tasksDone}</h1>
      <ul >
        {
          tasks.map((task)=>
            (<li className="flex justify-center p-2 gap-2" key={task.id}>
          <input type="checkbox" id={`task-${task.id}`} checked={task.done} onChange={()=>toggleTask(task.id)}/>
          <label className={task.done?"line-through text-gray-300":""} htmlFor={`task-${task.id}`}>{task.text}</label>
        </li>)
        )
      }
      </ul>
      </div>
    </div>
  )
}