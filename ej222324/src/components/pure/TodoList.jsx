import React from "react";
import Todo from "./Todo";
import PropTypes from "prop-types";

const TodoList = ({ todos, onTodoClick }) => {
  return (
    <div>
      <h1>Your todo's</h1>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
        ))}
      </ul>
    </div>
  );
};

TodoList.prototypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
