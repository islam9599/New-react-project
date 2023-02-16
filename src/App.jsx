import React, { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const changeTask = (event) => {
    setNewTask(event.target.value);
  };
  const addTask = () => {
    const list = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    setTodoList([...todoList, list]);
  };
  const deleteTask = (id) => {
    const newArr = todoList.filter((task) => task.id !== id);
    setTodoList(newArr);
  };

  return (
    <div className="App">
      <div>
        <input onChange={changeTask} type="text" name="" id="" />
        <button onClick={addTask}>Add task!</button>
      </div>
      <div>
        {todoList.map((task) => {
          return (
            <h1>
              {task.taskName}{" "}
              <button onClick={() => deleteTask(task.id)}>x</button>
            </h1>
          );
        })}
      </div>
    </div>
  );
}

export default App;
