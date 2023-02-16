import { useState } from 'react';
import './App.css';
import FormAdd from './components/FormAdd/FormAdd';
import TaskList from './components/TaskList/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    setTasks(prevState => [...prevState, task]);
  };

  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter(task => task.id !== id))
   
  }

  return (
    <div className="App">
      <FormAdd addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
