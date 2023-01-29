import React from "react";
import './Alert.css';

function Alert(props) {
    return(
        <div className="Alert">
            <h2>¿Todavía no has hecho esta tarea, estás seguro de que quieres eliminarla :c ?</h2>
            <div>
                <button onClick={props.BorrarDef}>Sí, no me importa nada ni nadie</button>
                <button onClick={() => props.setopenAlert(false)}>Eavemaría, no no! Cómo se te ocurre</button>
            </div>
        </div>
    )
};

export { Alert };