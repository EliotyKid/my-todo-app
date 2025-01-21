"use client"
import { useState, FormEvent } from "react";
import { Task } from "@/types/task";

interface TaskFormProps {
    onAddTask: (task: Task) => void;
}

export default function TaskForm({onAddTask}: TaskFormProps){
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [shortDescription, setShortDescription] = useState<string>("");

    const handleSubmit = (e: FormEvent): void => {
        e.preventDefault();
        if (!title) return alert("Title is required");

        const newTask: Task = {
            id: Date.now().toString(),
            title,
            description,
            shortDescription,
            completed: false,
            createdAt: new Date().toISOString(),
        };

        onAddTask(newTask);
        setTitle("");
        setDescription("");
        setShortDescription("")
    }

    return(
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Short Description"
                value={shortDescription}
                onChange={(e) => setShortDescription(e.target.value)}
            />
            <textarea 
                placeholder="Task Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    )
}