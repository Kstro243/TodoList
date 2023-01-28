import React from "react";
import './TodoTasks.css'

function TodoTasks(props) {
    return(
        <div className="divTodoTasks">
            {props.children}
        </div>
    )
};

export { TodoTasks };