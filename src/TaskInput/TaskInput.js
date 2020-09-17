import React from 'react';
import './TaskInput.scss';

const TaskInput = ({defaultValue, onSubmit}) => {
    const [input, setInput] = React.useState(defaultValue);
    const handleChange = e => setInput(e.target.value);

    React.useEffect( () => {setInput(defaultValue)}, [defaultValue] );
    return (
       <div className='task-input'>
           <input
               type='text'
               value={input}
               onChange={handleChange}
               placeholder='Add a task...'
           />
           <button onClick={() => onSubmit('tasksks')}>
               <i class="fas fa-pen" />
           </button>
       </div>
    ) 
}

export default TaskInput;