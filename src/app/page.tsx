"use client"
import TaskForm from "@/components/TaskForm";
import { Task } from "@/types/task";
import { getTasks, saveTasks } from "@/utils/localStorageHelper";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    setTasks(getTasks());
  },[]);

  const addTask = (task: Task): void =>{
    const newTasks = [...tasks,task];
    setTasks(newTasks);
    saveTasks(newTasks);
  }

  const toggleTaskCompletion = (id: string): void => {
    const updatedTasks = tasks.map((task) => {
      return task.id === id ? { ...task, completed: !task.completed} : task
    });
    setTasks(updatedTasks);
    saveTasks(updatedTasks)
  }

  return (
    <div>
      <TaskForm onAddTask={addTask}/>
    </div>
  );
}
