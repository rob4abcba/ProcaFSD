import "./App.css";
import ConditionalRender from "./components/ConditionalRender";
import ConditionalRenderIfElse from "./components/ConditionalRenderIfElse";
import ToDoList from "./components/ToDoList";
import ToDoListWhiteboard from "./components/ToDoListWhiteboard";
function App() {
  return (
    <div>
      {/* <ConditionalRender age={12} role="Admin" />
      <ConditionalRenderIfElse role="cust" /> */}
      <ToDoList />
      <ToDoListWhiteboard />
    </div>
  );
}

export default App;
