import React from 'react';
import { useTasks } from './AppHooks';
import TaskList from './TaskList/TaskList';

const App = () => {
    const [tasks, addTask, removeTask] = useTasks([]);
    const [input, setInput] = React.useState('');

    const handleChange = e => setInput(e.target.value);
    const handleSubmit = () => {
        addTask({id: createUUID(), input});
        setInput('');
    }
    const handleEdit = task => {
        removeTask(task);
        setInput(task.input);
    }
       
    const createUUID = () => Date.now();        // Temporary implementation, will change logic later

    return (
        <div>
            <div className='header'>
                To-Do List
            </div>
            <div className='content'>
                <div className='search-bar'>
                    <input type='text' value={input} onChange={handleChange} />
                    <button onClick={handleSubmit}>+</button>
                </div>
                <div>
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