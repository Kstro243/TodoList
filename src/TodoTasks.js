import React from "react";
import './TodoTasks.css'

function TodoTasks({children}) {
    return(
        <div className="divTodoTasks">
            {children}
        </div>
    )
};

export { TodoTasks };