import React, { useEffect, useState } from 'react';
import './App.css';
import { useDrop } from 'react-dnd';
import AddTask from './Kanban-style Task Tracker/components/AddTask';
import ToDo from './Kanban-style Task Tracker/components/ToDo';

function App() {
  const [taskList, setTaskList] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("taskList");
    if (storedTasks) {
      setTaskList(JSON.parse(storedTasks));
    }
  }, []);

  const addToCompleted = (id, projectName, taskDescription, timestamp, duration) => {
    const moveTask = taskList.filter((task) => id === task.id);
    setCompleted((completed) => [
      ...completed,
      { moveTask, projectName, taskDescription, timestamp, duration },
    ]);
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "todo",
    drop: (item) =>
      addToCompleted(
        item.id,
        item.projectName,
        item.taskDescription,
        item.timestamp,
        item.duration
      ),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <>
      <h1 className="text-2xl font-bold py-4 pl-6">The Task Tracker</h1>
      <p className="text-xl pl-6">Hi there!</p>
      <div className="flex flex-row items-center">
        <p className="text-xl pl-6">Click</p>
        <AddTask taskList={taskList} setTaskList={setTaskList} />
        <p className="text-xl my-2">to add a new task</p>
      </div>
      <div className="flex flex-row">
        <div className="w-full flex flex-col">
          <h2 className="bg-gray-300 ml-6 text-xl font-semibold max-w-lg my-4 w-3/4 py-2 px-4">
            To Do:
          </h2>
          <div className="flex flex-col-reverse">
            {taskList.map((task, i) => (
              <ToDo key={i} task={task} taskList={taskList} index={i} setTaskList={setTaskList} />
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col" ref={drop}>
          <h2 className="bg-gray-300 ml-6 text-xl font-semibold max-w-lg my-4 w-3/4 py-2 px-4">
            Completed:
          </h2>
          {completed.map((task, i) => (
            <ToDo key={i} task={task} taskList={taskList} setTaskList={setTaskList} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
