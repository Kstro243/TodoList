import React from "react";
import './TodoList.css';

function TodoList(props) {
    return(
        <section className="sectionTodoList">
            <h2>Tareas por hacer</h2>
            <ul className="ul">
                {props.children}  
            </ul>
        </section>
    )
}

export {TodoList};