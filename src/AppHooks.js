import React from 'react';

export function useTasks(initialValue) {
    const [tasks, setTasks] = React.useState(initialValue);

    const addTask = (task) => setTasks([...tasks, task]);

    const removeTask = (task) => {
        let index = tasks.map( task => task.id).indexOf(task.id);
        if(index > -1) {
            setTasks( prevTask => {
                let newTasks = [...prevTask];   //Creating a deep copy, as updating previous state directly causes issues in re-rendering
                newTasks.splice(index, 1); 
                return newTasks;
            });
        }
    }

    return [tasks, addTask, removeTask];
}