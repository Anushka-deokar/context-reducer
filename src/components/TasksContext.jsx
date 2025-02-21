
import React, { createContext, useReducer, useContext, useCallback, useMemo } from "react";

// Create Context
const TaskContext = createContext();

// Initial State
const initialState = {
    tasks: [],
};

// Reducer Function
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {
                tasks: [...state.tasks, { id: Date.now(), text: action.payload, completed: false }],
            };
        case "REMOVE_TASK":
            return {
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            };
        case "TOGGLE_TASK":
            return {
                tasks: state.tasks.map((task) =>
                    task.id === action.payload ? { ...task, completed: !task.completed } : task
                ),
            };
        default:
            return state;
    }
};

// Context Provider
export const TaskProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // useCallback to prevent re-renders
    const addTask = useCallback((text) => dispatch({ type: "ADD_TASK", payload: text }), []);
    const removeTask = useCallback((id) => dispatch({ type: "REMOVE_TASK", payload: id }), []);
    const toggleTask = useCallback((id) => dispatch({ type: "TOGGLE_TASK", payload: id }), []);


    const completedCount = useMemo(() => state.tasks.filter((task) => task.completed).length, [state]);

    return (
        <TaskContext.Provider value={{ state, addTask, removeTask, toggleTask, completedCount }}>
            {children}
        </TaskContext.Provider>
    );
};


export const useTaskContext = () => useContext(TaskContext);
