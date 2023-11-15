import React, { useState } from 'react';
import "./style.css"

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      setTasks([...tasks, { text: task, checked: false }]);
      setTask('');
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].checked = !updatedTasks[index].checked;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h4>Plan Master - to-do list Application</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" id="input" placeholder="press enter to add tasks" value={task} onChange={handleChange} />
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.checked ? 'checked' : ''}>
            {task.text}
            <i className="fas fa-trash" onClick={() => deleteTask(index)}></i>
            <i className="fas fa-check" onClick={() => toggleTask(index)}></i>
          </li>
        ))}
      </ul>
    </div>
  );
}
