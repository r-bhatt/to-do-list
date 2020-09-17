import React from 'react';
import './App.scss';
import { useTasks } from './AppHooks';
import TaskInput from './TaskInput/TaskInput';
import TaskList from './TaskList/TaskList';

const App = () => {
    const [tasks, addTask, removeTask] = useTasks([]);
    const [editTask, setEditTask] = React.useState('');
    
    const handleSubmit = (input) => addTask({id: createUUID(), input});
    const handleEdit = task => {
        removeTask(task);
        setEditTask(task.input);
    }
       
    const createUUID = () => Date.now();        // Temporary implementation, will change logic later

    return (
        <div>
            <div className='header'>
                To-Do List
            </div>
            <div className='content'>
                <TaskInput
                    defaultValue={editTask}
                    onSubmit={handleSubmit}
                />
                <div className='task-list'>
                    <TaskList
                        tasks={tasks}
                        removeTask={removeTask}
                        editTask={handleEdit}
                    />
                </div>
            </div>
        </div>
    )
};

export default App;