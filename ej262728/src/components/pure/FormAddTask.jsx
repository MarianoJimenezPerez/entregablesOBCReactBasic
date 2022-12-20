import React, { useRef } from "react";
import { useAppContext } from "../../AppProvider";

const FormAddTask = () => {
  const { dispatch } = useAppContext();

  const taskTitle = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "TASK_CREATE",
      payload: {
        task: {
          title: taskTitle.current.value,
          completed: false,
        },
      },
    });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="Text" placeholder="Task title" ref={taskTitle} />
      <button type="submit">Add task</button>
    </form>
  );
};

export default FormAddTask;
