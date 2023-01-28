import React from "react";
import './TodoSearch.css';

function TodoSearch({searchValue, setsearchValue}) {
    const addTask = (msg) => {
    alert(msg);
    }
    
    const SearchInput = (event) => {
            console.log(event.target.value);
            setsearchValue(event.target.value);
    }

    return(
    <div className="div">
        <input placeholder="Buscar tarea" onChange={SearchInput} value={searchValue} />
        <button onClick={() => addTask('Aquí se debería abrir el modal')}><span className="material-symbols-outlined">search</span></button>
    </div>
    )
}

export {TodoSearch};