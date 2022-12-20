import React from "react";
import PropTypes from "prop-types";
import { useAppContext } from "../../AppProvider";

const Task = ({ id, title, completed }) => {
  const { dispatch } = useAppContext();

  const handleComplete = (id) => {
    dispatch({
      type: "TASK_TOGGLE",
      payload: {
        id,
      },
    });
  };

  const handleDelete = (id) => {
    dispatch({
      type: "TASK_DELETE",
      payload: {
        id,
      },
    });
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td style={{ cursor: "pointer" }} onClick={() => handleComplete(id)}>
        {completed ? "✅" : "🗆"}
      </td>
      <td>
        <button
          style={{
            border: "none",
            background: "transparent",
            cursor: "pointer",
          }}
          onClick={() => handleDelete(id)}
        >
          ❌
        </button>
      </td>
    </tr>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default Task;
