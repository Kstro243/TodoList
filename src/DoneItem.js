import React from "react";
import './DoneItem.css'

function DoneItem({
    tarea,
    completed,
    deletedFcn
}) {
    return(
        <li className="liDoneItem">
        <span className={`material-symbols-outlined ${completed && 'checked'}`}>check</span>
        <p className={`${completed && 'completed'}`}>{tarea}</p>
        <span onClick={deletedFcn} className="material-symbols-outlined">delete</span>
        </li>
    )
}

export {DoneItem}