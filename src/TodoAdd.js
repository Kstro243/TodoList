import React, { useEffect } from "react";
import './TodoAdd.css'

function TodoAdd({anadir}) {
    const [newTodoValue, setnewTodoValue] = React.useState('');
    const onChange = (event) => {
        setnewTodoValue(event.target.value);
    };
    const addTask = () => {
        anadir(newTodoValue)
        setnewTodoValue('');
    };
    // useEffect(() => {
    //     document.addEventListener('keydown', enter, true);
    // }, []);
    // const enter = (e) => {
    //     console.log(e.key);
    //     if ((e.key == 'Enter') && newTodoValue) {
    //         addTask();
    //     };
    // }

    return(
    <div className="div">
        <input placeholder="Añadir tarea" value={newTodoValue} onChange={onChange}  />
        <button onKeyDown={() => useEffect} onClick={() => addTask()}><span className="material-symbols-outlined"  >add</span></button>
    </div>
    )
}

export {TodoAdd};

