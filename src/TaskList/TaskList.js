import React from 'react';

const TaskList = ({tasks, removeTask, editTask}) => {
    return (
        <>
            {tasks.length ?
                (
                    <>
                        {tasks.map(task => (
                            <div key={task.id}>
                                {task.input}
                                <button onClick={() => editTask(task)}>Edit</button>
                                <button onClick={() => removeTask(task)}>-</button>
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