import React, { useState } from 'react'

const GorevEkle = ({ tasks, setTasks }) => {
    const [taskname, setTaskname] = useState('')
    const [taskdate, setTaskdate] = useState(new Date().toISOString())

    const Submit = (e) => {
        e.preventDefault();
        console.log('e: ', e);

        const newTask = {
            id: Math.max(...tasks.map((task) => Number(task.id))) + 1, // Math.max(1, 2, 3, 4)
            text: e.target[0].value,
            day: e.target[1].value,
            isDone: false
        }

        console.log('newTask: ', newTask);

        setTasks([...tasks, newTask])
    };

    return (

        <div className="container text-center mt-4">
            <form onSubmit={Submit}>
                <div className="form-control">
                    <label htmlFor="text">Task</label>

                    <input
                        type="text"
                        placeholder="Add Task"
                        name='taskname'
                        value={taskname}
                        onChange={(e) => setTaskname(e.target.value)}
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="day">Day & Time</label>

                    <input
                        type="datetime-local"
                        name='taskdate'
                        value={taskdate}
                        onChange={(e) => setTaskdate(e.target.value)}
                    />
                </div>

                <div>
                    <button className="btn btn-submit" type="submit">
                        SUBMIT
                    </button>
                </div>
            </form>
        </div>
    );
}

export default GorevEkle