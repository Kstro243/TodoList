import React from "react";
import './TodoSearch.css';

function TodoSearch({searchValue, setsearchValue}) {    
    const SearchInput = (event) => {
            setsearchValue(event.target.value);
    }

    return(
    <div className="div">
        <input placeholder="Buscar tarea" onChange={SearchInput} value={searchValue} />
        <button><span className="material-symbols-outlined">search</span></button>
    </div>
    )
}

export {TodoSearch};