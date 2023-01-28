import React from "react";
import './TodoAdd.css'

function TodoAdd() {
    const addTask = (msg) => {
        alert(msg);
    };

    return(
    <div className="div">
        <input placeholder="Añadir tarea" />
        <button onClick={() => addTask('Aquí se debería abrir el modal')}><span className="material-symbols-outlined">add</span></button>
    </div>
    )
}

export {TodoAdd};

