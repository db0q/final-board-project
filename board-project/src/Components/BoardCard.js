import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskCard from "./TaskCard";
import db from "../firebase";
import { collection, onSnapshot, doc, updateDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

function BoardCard({ board, onDelete }) {

  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    boardId: board.boardId,
    dueDate: '',
    assignee: '',
    isCompleted: false,
    taskId: uuidv4(),
  });

  const handleTaskChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const createTask = async (task) => {
    const boardsRef = doc(db, "boards", board.boardId);
    if (isUpdate) {
      const updatedTasks = tasks.map((t) => {
        if (t.taskId === task.taskId) {
          return task;
        } else {
          return t;
        }
      });
      await updateDoc(boardsRef, {
        tasks: updatedTasks
      });
      setShowForm(false);
      setIsUpdate(false);
    } else {
      await updateDoc(boardsRef, {
        tasks: [...tasks, task]
      });
      setShowForm(false);
    }
  };

  const editTask = async (task) => {
    setNewTask({
      title: task.title,
      description: task.description,
      boardId: board.boardId,
      dueDate: task.dueDate,
      assignee: task.assignee,
      isCompleted: task.isCompleted,
      taskId: task.taskId,
    });
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    createTask(newTask);
    setTasks([...tasks, newTask]);
    setNewTask({
      title: '',
      description: '',
      boardId: board.boardId,
      dueDate: '',
      assignedTo: '',
      isCompleted: false,
      taskId: uuidv4(),
    });
  };

  const deleteTask = async (taskId) => {
    const boardsRef = doc(db, "boards", board.boardId);
    const updatedTasks = tasks.filter((task) => task.taskId !== taskId);
    await updateDoc(boardsRef, {
      tasks: updatedTasks
    });
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "boards"), (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.id === board.boardId) {
          setTasks(doc.data().tasks);
        }
      });
    });
    return unsubscribe;
  }, [board.boardId]);

  return (
    <div className="flex flex-col items-center lg:mb-10 bg-white md:mx-3 rounded-lg
      align-center w-36 gap-14 md:w-80 md:gap-14 h-full w-auto ">

        <div className="flex flex-row mt-2 justify-center items-center gap-8 ">
        <h1 className="text-3xl font-bold text-black text-center py-2 px-2">
        {board.title}
      </h1>
      <button className="border-2 border-white w-[50px] float-right bg-white
         mt-4 text-white font-bold -mt-0 hover:text-slate-700 hover:bg-white border p-1 bg-slate-700"
        onClick={() => onDelete(board.boardId)}>X
      </button>

     
        </div>
      

      <div className="flex flex-col gap-2">
        {tasks.map((task, index) => {
          return (
            <TaskCard
              key={index}
              task={task}
              editTask={editTask}
              showForm={showForm}
              deleteTask={deleteTask}
              setShowForm={setShowForm}
              setIsUpdate={setIsUpdate}
              isUpdate={isUpdate}
            />
          );
        })}
      </div>

      <TaskForm
        task={newTask}
        handleTaskChange={handleTaskChange}
        handleTaskSubmit={handleTaskSubmit}
        setShowForm={setShowForm}
        showForm={showForm}
        setNewTask={setNewTask}
        isUpdate={isUpdate}
        setIsUpdate={setIsUpdate}
      />
    </div>
  );
}

export default BoardCard;

