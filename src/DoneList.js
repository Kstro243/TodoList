import React from "react";
import './DoneList.css'

function DoneList(props ) {
    return(
        <section className="sectionDoneList">
            <h2>Tareas hechas</h2>
            <ul className="ul">
                {props.children}  
            </ul>
        </section>
    )
}

export {DoneList} ;