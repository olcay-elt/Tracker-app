import React from "react";
const GorevleriGoster = ({ tasks, setTasks }) => {

    return (
        <div className="container text-center mt-4">
            {
                tasks.map((task, i) => (
                    <div className={
                        task.isDone ?
                            'btn d-block mb-3 done' :
                            'btn d-block mb-3'
                    } key={i} onClick={() => setTasks(tasks.map((item, k) => i === k ? { ...item, isDone: !item.isDone } : item))}>

                        {task.text}

                        <i className="fa-regular fa-circle-xmark float-end fa-2x"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setTasks([...tasks.filter(item => item.id !== task.id)])
                            }}
                        ></i>
                    </div>
                ))
            }
        </div>
    )
};

export default GorevleriGoster;
