import React from "react";
import './Alert.css';

function Alert({
    setopenAlert,
    BorrarDef
}) {
    return(
        <div className="Alert">
            <h2>¿Todavía no has hecho esta tarea, estás seguro de que quieres eliminarla :c ?</h2>
            <div>
                <button onClick={BorrarDef}>Sí, no me importa nada ni nadie</button>
                <button onClick={() => setopenAlert(false)}>Eavemaría, no no! Cómo se te ocurre</button>
            </div>
        </div>
    )
};

export { Alert };