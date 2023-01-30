import React from "react";
import './TodoList.css';

function TodoList({children}) {
    return(
        <section className="sectionTodoList">
            <h2>Tareas por hacer</h2>
            <ul className="ul">
                {children}  
            </ul>
        </section>
    )
}

export {TodoList};