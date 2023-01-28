import React from "react";
import './DoneItem.css'

function DoneItem(props) {
    return(
        <li className="liDoneItem">
        <span className={`material-symbols-outlined ${props.completed && 'checked'}`}>check</span>
        <p className={`${props.completed && 'completed'}`}>{props.tarea}</p>
        <span onClick={props.deletedFcn} className="material-symbols-outlined">delete</span>
        </li>
    )
}

export {DoneItem}