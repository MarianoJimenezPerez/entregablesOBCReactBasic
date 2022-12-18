import "./App.css";
import TodoContainer from "./components/containers/TodoContainer";
import TodoFormContainer from "./components/containers/TodoFormContainer";
import FilterOptions from "./components/pure/FilterOptions";

function App() {
  return (
    <div className="App">
      <TodoFormContainer />
      <FilterOptions />
      <TodoContainer />
    </div>
  );
}

export default App;
