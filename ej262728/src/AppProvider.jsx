import React, { useContext, useReducer } from "react";

//Actions
const TASK_CREATE = "TASK_CREATE";
const TASK_DELETE = "TASK_DELETE";
const TASKS_FILTER = "TASKS_FILTER";
const TASK_TOGGLE = "TASK_TOGGLE";

const AppContext = React.createContext(null);

const useAppContext = () => {
  return useContext(AppContext);
};

// Initial State for Reducer
const initialState = {
  tasks: [
    {
      id: 0,
      title: "Task example from system",
      completed: true,
    },
  ],
  lastId: 0,
  currentFilter: "all",
};

// Reducer
const reducer = (state, action) => {
  //define generic variable to capture data from payload
  let payloadData = "";
  console.log(state);

  switch (action.type) {
    case TASKS_FILTER:
      return {
        ...state,
        currentFilter: action.payload.filter,
      };
    case TASK_CREATE:
      payloadData = action.payload.task;
      payloadData.id = state.lastId + 1;
      return {
        ...state,
        tasks: [...state.tasks, payloadData],
        lastId: payloadData.id,
      };
    case TASK_DELETE:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
    case TASK_TOGGLE:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              completed: !task.completed,
            };
          }
          return task;
        }),
      };
    default:
      return state;
  }
};
const AppProvider = ({ children }) => {
  // Asign useReducer to state, reducer and dispatch actions
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, useAppContext };
