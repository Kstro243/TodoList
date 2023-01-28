import React from 'react';

function TodoCounter({totalTodos, completed}) {
    return (
        <h2>Has completado {completed} de {totalTodos} tareas</h2>
    )
}

export {TodoCounter};