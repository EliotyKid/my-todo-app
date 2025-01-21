import { Task } from "@/types/task";

export const getTasks = (): Task[] => {
    if (typeof window !== "undefined"){
        const task = localStorage.getItem("tasks");
        return task ? JSON.parse(task) as Task[] : [];
    }

    return [];
}

export const saveTasks = (tasks: Task[]): void => {
    if (typeof window !== "undefined"){
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}