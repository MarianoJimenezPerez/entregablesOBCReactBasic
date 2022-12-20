import React, { useReducer, useContext } from "react";
import { useAppContext } from "../AppProvider";
import TaskList from "../components/containers/TaskList";
import FormAddTask from "../components/pure/FormAddTask";
import TaskFilter from "../components/pure/TaskFilter";

const Home = () => {
  const { tasks } = useAppContext();
  return (
    <div>
      <FormAddTask />
      <TaskFilter />
      <TaskList />
    </div>
  );
};

export default Home;
