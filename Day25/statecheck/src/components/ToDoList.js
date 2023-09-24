import { useState } from "react";

const ToDoList = () => {
  let [task, setTask] = useState("");
  let [taskList, setTaskList] = useState([]);
  let changeHandler = (e) => {
    console.log(e);
    setTask(e.Target.value);
    console.log(task);
  };
  let addTask = () => {
    taskList.push(task);
    setTaskList(taskList);
    console.log(taskList);
  };
  return (
    <div>
      <h1>ToDoList</h1>
      <input onChange={(e) => changeHandler(e)} />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default ToDoList;
