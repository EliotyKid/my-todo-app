import { Task } from "@/types/task";

interface TaskItemProps {
    task: Task;
    onToggleCompletion: (id: string) => void;
}

export default function TaskItem({task, onToggleCompletion}: TaskItemProps){
    return(
        <li>
            <input 
                type="checkbox" 
                checked={task.completed}
                onChange={() => onToggleCompletion(task.id)}
            />
            <h3>{task.title}</h3>
            <p>{task.shortDescription}</p>
            <small>Created at: {new Date(task.createdAt).toLocaleString()}</small>
        </li>
    )
}