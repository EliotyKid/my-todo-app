import { Task } from "@/types/task";
import TaskItem from "./TaskItem";

interface TaskListProps {
    tasks: Task[];
    onToggleCompletion: (id: string) => void;
}

export default function TaskList({tasks, onToggleCompletion}: TaskListProps){
    return(
        <ul>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task= {task}
                    onToggleCompletion={onToggleCompletion}
                />
            ))}
        </ul>
    )
}