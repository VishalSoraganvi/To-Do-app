import AddTaskForm from "./Components/AddTaskForm";
import UpdateForm from "./Components/UpdateForm";
import ToDo from "./Components/ToDo";
import "./App.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid } from "uuid";

function App() {
  //Current Tasks state
  const [toDo, setToDo] = useState(() => {
    const savedToDos = localStorage.getItem("toDo");
    if (savedToDos) {
      return JSON.parse(savedToDos);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("toDo", JSON.stringify(toDo));
  }, [toDo]);

  //temp states
  //state for new tasks
  const [newTask, setNewTask] = useState("");

  //state for updating data
  const [updateData, setUpdateData] = useState("");

  //functions

  //Add a task function
  const addTaskHandler = () => {
    if (newTask) {
      const unique_id = uuid();
      const num = unique_id;
      let newEntry = {
        id: num,
        title: newTask,
        status: false,
      };
      setToDo([...toDo, newEntry]);
      console.log(toDo);
      setNewTask("");
    }
  };

  //Delete Task function
  const deleteTaskHandler = (id) => {
    const newTasks = toDo.filter((task) => id !== task.id);
    // console.log(toDo);
    setToDo(newTasks);
  };
  //Mark done function
  const markDoneHandler = (id) => {
    const newTask = toDo.map((task) => {
      if (id === task.id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
  };

  //cancel update function
  const cancelUpdateHandler = () => {
    setUpdateData("");
  };

  //change Task function
  const changeTaskHandler = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  //Update Task function
  const updateTaskHandler = () => {
    let filteredRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let updatedObject = [...filteredRecords, updateData];
    setToDo(updatedObject);
    setUpdateData("");
  };

  return (
    <div className="container App">
      <br />
      <h2>To-Do List App</h2>
      <br />

      {updateData && updateData ? (
        <UpdateForm
          updateData={updateData}
          changeTaskHandler={changeTaskHandler}
          updateTaskHandler={updateTaskHandler}
          cancelUpdateHandler={cancelUpdateHandler}
        />
      ) : (
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTaskHandler}
        />
      )}
      <ToDo
        toDo={toDo}
        markDoneHandler={markDoneHandler}
        setUpdateData={setUpdateData}
        deleteTaskHandler={deleteTaskHandler}
      />
    </div>
  );
}

export default App;
