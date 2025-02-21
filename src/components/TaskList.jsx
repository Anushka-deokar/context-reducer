
import React, { useMemo } from "react";
import { useTaskContext } from "./TasksContext";

const TaskList = () => {
    const { state, removeTask, toggleTask, completedCount } = useTaskContext();

    return (
        <div>
            <h2>Task List</h2>
            <p>Completed Tasks: {completedCount}</p>
            <ul>
                {state.tasks.map((task) => (
                    <li
                        key={task.id}
                        style={{ textDecoration: task.completed ? "line-through" : "none" }}
                    >
                        {task.text}
                        <button onClick={() => toggleTask(task.id)}>Toggle</button>
                        <button onClick={() => removeTask(task.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
