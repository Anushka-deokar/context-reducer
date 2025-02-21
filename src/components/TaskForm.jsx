
import React, { useState } from "react";
import { useTaskContext } from "./TasksContext";

const TaskForm = () => {
    const { addTask } = useTaskContext();
    const [taskText, setTaskText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskText.trim()) {
            addTask(taskText);
            setTaskText("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder="Enter task"
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;


