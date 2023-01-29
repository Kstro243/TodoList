import React from "react";
import './TodoItem.css'

function TodoItem(props) {
    return(
        <li className="li">
            <span onClick={props.completedFcn} className={`material-symbols-outlined ${props.completed && 'checked'}`}>check</span>
            <p className={`${props.completed && 'completed'}`}>{props.tarea}</p>
            <span className="material-symbols-outlined" onClick={props.borrarTarea}>delete</span>
        </li>
    )
}

export {TodoItem};