import React from 'react';
import { useState } from 'react';
import './TodoPage.css';
const Todo = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleAddTask = () => {
        if(task.trim === ''){
            return;
        }
        setTasks([...tasks,task]);
    }
    const handleRemoveTask = () => {
        setTasks([])
    }
    return(
       
        <div className = 'Todopage-container'>
             <div className='glass-card '>
            <h1>MY WORK LIST</h1>
            <p>Manage Your Daily Tasks ~ </p>

            <div className='todo-form'>
                <input
                type = "text"
                placeholder = "Enter Your Task"
                value = {task}
                onChange={(e) => setTask(e.target.value)}
                />
                <button onClick = {handleAddTask} >Add Task</button>
                
            </div>
            <div className = 'My-Task'>
                {tasks.map((item, index) => (
        <div className = 'element' key={index}>
            <input type="checkbox" />
            <span>   {item}</span>
            <button className='trash'>
                <svg  xmlns="http://www.w3.org/2000/svg" width={18} height={18} 
                fill={"currentColor"} viewBox={"0 0 24 24"}>
                {/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
                <path d="m17,6v-2c0-1.1-.9-2-2-2h-6c-1.1,0-2,.9-2,2v2H2v2h2v12c0,1.1.9,2,2,2h12c1.1,0,2-.9,2-2v-12h2v-2h-5Zm-8-2h6v2h-6v-2Zm1,14h-2v-8h2v8Zm6,0h-2v-8h2v8Z"/>
                </svg>
            </button>
        </div>
    ))}
            </div>
        </div>
        </div>
    )
}
export default Todo;