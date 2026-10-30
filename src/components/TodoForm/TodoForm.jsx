import React,{useState} from 'react';
import './TodoForm.css';
const TodoFormdata = () => {
    const handleAddTask = () => {
  if (task.trim() === "") {
    return;
  }

  const newTask = {
    id: Date.now(),
    text: task,
    completed: false,
  };

  setTasks([...tasks, newTask]);

  setTask("");
};
return(
    <div className="todo-list">
  <h2>My Tasks</h2>

  {tasks.map((item) => (
    <div key={item.id} className="task-item">
      <input type="checkbox" />

      <span>{item.text}</span>
    </div>
  ))}
</div>
)
}