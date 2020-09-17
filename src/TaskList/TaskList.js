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
                                    <i className="fas fa-pen"/>
                                </button>
                                <button onClick={() => removeTask(task)}>
                                    <i className="fas fa-trash"/>
                                </button>
                            </div>
                        ))}
                    </>

                ) :
                (
                    <div className='empty-list'>
                        Add tasks to see them in the List
                    </div>
                )
            }
        </>
    )
};

export default TaskList;
