import React from 'react';
import './TaskInput.scss';

const TaskInput = ({defaultValue, onSubmit}) => {
    const [input, setInput] = React.useState(defaultValue);
    const [err, setErr] = React.useState('');
    const handleChange = e => setInput(e.target.value);
    const inputRef = React.useRef();
    
    React.useEffect( () => {
        setInput(defaultValue);
        inputRef.current.focus();
    }, [defaultValue] );

    const handleSubmit = () => {
        if(validateInput(input)) {
            onSubmit(input);
            setInput('');   
        }else {
            setErr('Field cannot be empty!')
        }
    }

    const handleKeys = e => {
        setErr('');
        if (e.key.toUpperCase() === 'ENTER') handleSubmit();
    }

    const validateInput = (text) => /^.+$/.test(text);
    
    return (
        <div className={`${err ? 'show-err' : ''}`}>
            <div className='task-input'>
                <input
                    type='text'
                    value={input}
                    onChange={handleChange}
                    onKeyDown={handleKeys}
                    placeholder='Add a task...'
                    ref={inputRef}
                />
                <button onClick={handleSubmit}>
                    <i className="fas fa-plus" />
                </button>
            </div>
            {err && 
            (<div className='err-text'> {err} </div>)}
        </div>
    ) 
}

export default TaskInput;
