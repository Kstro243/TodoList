import React from "react";
import './TodoAdd.css'

function TodoAdd({anadir}) {
    const [newTodoValue, setnewTodoValue] = React.useState('');
    const onChange = (event) => {
        setnewTodoValue(event.target.value)
    };
    const addTask = () => {
        anadir(newTodoValue)
        setnewTodoValue('');
    };

    return(
    <div className="div">
        <input placeholder="Añadir tarea" value={newTodoValue} onChange={onChange}  />
        <button onClick={() => addTask()}><span className="material-symbols-outlined"  >add</span></button>
    </div>
    )
}

export {TodoAdd};

