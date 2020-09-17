import React from 'react';
import './TaskList.scss';

const TaskList = ({tasks, removeTask, editTask}) => {
    return (
        <>
            {tasks.length ?
                (
                    <>
                        <div className='task-head'>
                            <span>My List</span>
                            <span>Total Items: {tasks.length}</span>
                        </div>
                        {tasks.map(task => (
                            <div key={task.id} className='task-card'>
                                <span className='task-content'>{task.input}</span>
                                <button onClick={() => editTask(task)}>
                                    <i class="fas fa-pen"/>
                                </button>
                                <button onClick={() => removeTask(task)}>
                                    <i class="fas fa-trash"/>
                                </button>
                            </div>
                        ))}
                    </>

                ) :
                (
                    <p> List is empty </p>
                )
            }
        </>
    )
};

export default TaskList;