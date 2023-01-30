import React from "react";
import './TodoItem.css'

function TodoItem({
    tarea, 
    completed,
    completedFcn,
    borrarTarea
}) {
    return(
        <li className="li">
            <span onClick={completedFcn} className={`material-symbols-outlined ${completed && 'checked'}`}>check</span>
            <p className={`${completed && 'completed'}`}>{tarea}</p>
            <span className="material-symbols-outlined" onClick={borrarTarea}>delete</span>
        </li>
    )
}

export {TodoItem};