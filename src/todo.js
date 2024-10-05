import { useEffect, useState } from "react";
import "./style.css";
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTasks, setNewTasks] = useState("");
  function handelInputChange(event) {
    setNewTasks(event.target.value);
  }
  function addTask() {
    if (newTasks.trim() !== "") {
      setTasks((t) => [...t, newTasks]);
      setNewTasks("");
    }
  }
  function deleteTask(index) {
    const updatedTask = tasks.filter((_, i) => i !== index);
    setTasks(updatedTask);
  }
  function movetaskUp(index) {
    if (index > 0) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index],
      ];
      setTasks(updatedTask);
    }
  }
  return (
    <>
      <div className="to-do">
        <h1>To Do List</h1>
        <div>
          <input
            value={newTasks}
            type="text"
            placeholder="enter a task..."
            onChange={handelInputChange}
          ></input>
          <button className="add-button" onClick={addTask}>
            add
          </button>
        </div>
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button className="delete-but" onClick={() => deleteTask(index)}>
                Delete
              </button>
              <button className="move-but" onClick={() => movetaskUp(index)}>
                UP
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};
export default App;
