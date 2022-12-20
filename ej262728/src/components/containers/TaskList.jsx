import React from "react";
import PropTypes from "prop-types";
import Task from "../pure/Task";
import { useAppContext } from "../../AppProvider";

const TaskList = () => {
  const { state } = useAppContext();

  let tasks = state.tasks;

  if (state.currentFilter === "completed") {
    tasks = tasks.filter((task) => task.completed === true);
  } else if (state.currentFilter === "uncompleted") {
    tasks = tasks.filter((task) => task.completed === false);
  }

  return (
    <div>
      <table style={{ margin: "20px auto" }}>
        <thead>
          <tr>
            <th style={{ width: "100px" }}>ID</th>
            <th style={{ width: "160px" }}>Title</th>
            <th style={{ width: "130px" }}>COMPLETED</th>
            <th style={{ width: "90px" }}>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task key={task.id} {...task} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
