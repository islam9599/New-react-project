import React from "react";
import "./Task.css";
export const Task = (props) => {
  return (
    <div
      className="container"
      style={{ textDecorationLine: props.completed ? "line-through" : "none" }}
    >
      <h1>{props.taskName} </h1>
      <button onClick={() => props.completedTask(props.id)}>Complete</button>
      <button onClick={() => props.deleteTask(props.id)}>x</button>
    </div>
  );
};
