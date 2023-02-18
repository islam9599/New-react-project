import React, { useState } from "react";
import "./App.css";
import { Task } from "./components/Task";

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
      completed: false,
    };
    setTodoList([...todoList, list]);
  };
  const deleteTask = (id) => {
    const newArr = todoList.filter((task) => task.id !== id);
    setTodoList(newArr);
  };
  const completedTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="main">
        <input onChange={changeTask} type="text" name="" id="" />
        <button onClick={addTask}>Add task!</button>
      </div>
      <div className="task">
        {todoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              deleteTask={deleteTask}
              completedTask={completedTask}
              completed={task.completed}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
