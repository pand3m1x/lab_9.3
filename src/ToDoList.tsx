
// import TaskList from './components/TaskList'

  // id: string;
  // title: string;
  // description: string;
  // status: TaskStatus;
  // priority: 'low' | 'medium' | 'high';
  // dueDate: string;
import { useState } from "react";
import type { Task } from "./types/index.ts";

function ToDoList(){

  const [tasks, setTasks] = useState <Task[]>([
      {id: "1",
       title: "Take over the WORLD!",
       description: "The same thing we do every night, Pinky",
       status: "pending",
       priority: "high",
       dueDate: "2026-02-23",

      },

       {id: "2",
       title: "Reheat Revenge",
       description: "Utilizing the Microwave of Evil",
       status: "completed",
       priority: "high",
       dueDate: "2010-11-05",

      }

  ]);
  
  return(
    <div id="taskCard" style={{width:"600px", backgroundColor:"lightGray", borderRadius:"10px", padding:"20px", borderStyle:"2px solid grey"}}>
      <h1 style={{alignContent:"center"}}>Task List</h1>
      <ul style={{listStyleType:"none"}}> {tasks.map(task =>(
        <li key={task.id} style={{backgroundColor:"white", borderRadius:"10px", width:"500px", borderStyle:"2px solid black"}}>
          <strong>{task.title}</strong>
          <p>{task.description}</p>
          <p>{task.priority}</p>
          <p>{task.status}</p>
          <button style={{backgroundColor:"red", width:"50px", fontSize:".8rem"}}>delete</button>
        </li>
      ))}
      </ul>
    </div>
  );
}

export default ToDoList