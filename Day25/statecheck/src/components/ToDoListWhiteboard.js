import { useState } from "react";

const ToDoList = () => {
  let [task, setTask] = useState("");
  let [taskList, setTaskList] = useState([]);

  let changeHandler = (e) => {
    setTask(e.target.value);
    console.log(task);
  };
  let addTask = () => {
    taskList.push(task);
    setTaskList(taskList);
    console.log(taskList);
  };
  return (
    <div>
      <h1> ToDoList!</h1>
      <h2> Here is the task list</h2>
      {taskList.map((elem) => (
        <p> {elem} </p>
      ))}
      Task - <input onChange={(e) => changeHandler(e)} />
      <button onClick={addTask}> Add Task</button>
    </div>
  );
};

export default ToDoList;
