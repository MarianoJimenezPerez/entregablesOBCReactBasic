import React from "react";
import { useAppContext } from "../../AppProvider";

const TaskFilter = () => {
  const { dispatch } = useAppContext();

  const handleFilter = (bool) => {
    if (bool === null) {
      dispatch({ type: "TASKS_FILTER", payload: { filter: "all" } });
    } else if (bool) {
      dispatch({ type: "TASKS_FILTER", payload: { filter: "completed" } });
    } else {
      dispatch({ type: "TASKS_FILTER", payload: { filter: "uncompleted" } });
    }
  };

  return (
    <div>
      Filter by:
      <span
        style={{ margin: "10px", cursor: "pointer" }}
        onClick={() => {
          handleFilter(null);
        }}
      >
        All
      </span>
      <span
        style={{ margin: "10px", cursor: "pointer" }}
        onClick={() => {
          handleFilter(true);
        }}
      >
        Completed
      </span>
      <span
        style={{ cursor: "pointer" }}
        onClick={() => {
          handleFilter(false);
        }}
      >
        Uncompleted
      </span>
    </div>
  );
};

export default TaskFilter;
