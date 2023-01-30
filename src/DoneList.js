import React from "react";
import './DoneList.css'

function DoneList({children}) {
    return(
        <section className="sectionDoneList">
            <h2>Tareas hechas</h2>
            <ul className="ul">
                {children}  
            </ul>
        </section>
    )
}

export {DoneList} ;