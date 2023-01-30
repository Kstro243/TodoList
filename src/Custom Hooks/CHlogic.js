import React from "react";
import { useLocalStorage } from "./CHuseLocalStorage";

function useLogic() {
    const {item: todo,
        guardarItem: guardarTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);
    const {item: done,
        guardarItem: guardarDones,
    } = useLocalStorage('DONES_V1', []);

    const completedToDos = done.length;
    const totalTodos = todo.length + done.length;

    //Variable que lee el Value del input del search
    const [searchValue, setsearchValue] = React.useState('');
    //Variable que lee el Value del input del search

    //Lógica para buscar Dones o Todos
    let searchedTodo = [];

    if (!searchValue.length >= 1) {
    searchedTodo = todo;
    } else {
    searchedTodo = todo.filter(tOdo => {
        const todoText = tOdo.tarea.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
    })
    }

    let searchedDoneTaks = [];

    if (!searchValue.length >= 1) {
    searchedDoneTaks = done;
    } else {
    searchedDoneTaks = done.filter(tOdo => {
        const doneText = tOdo.tarea.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return doneText.includes(searchText);
    })
    }
    //Lógica para buscar Dones o Todos
    
    const anadir = (tarea) => {
    const newTodos = [...todo];
    newTodos.push({
        completed: false,
        tarea,
    });
    guardarTodos(newTodos);
    }

    const taskCompleted = (tarea) => {
    let object = {};
    const taskIndex = todo.findIndex(todo => todo.tarea === tarea);
    object = todo[taskIndex];

    const newTodos = [...todo];
    const newDones = [...done];
    newTodos.splice(taskIndex, 1);
    object.completed = true;
    newDones.unshift(object);
    guardarTodos(newTodos);
    guardarDones(newDones);
    }

    const taskDeleted = (tarea) => {
    const taskIndex = done.findIndex(todo => todo.tarea === tarea);
    
    const newDones = [...done];
    newDones.splice(taskIndex, 1);
    guardarDones(newDones);
    }
    //Lógica para agregar o quitar Dones

    const BorrarDef = () => {
    const taskIndex = todo.findIndex(todo => todo.tarea === tareaPing);
    
    const newTodos = [...todo];
    newTodos.splice(taskIndex, 1);
    guardarTodos(newTodos);
    setopenAlert(false);
    }

    const [openAlert, setopenAlert] = React.useState(false);
    const [tareaPing, setTarea] = React.useState('');
    const BorrarTarea = (tarea) => {
    setopenAlert(true);
    setTarea(tarea);
    };

    return {
        totalTodos,
        completedToDos,

        anadir,

        searchValue,
        setsearchValue,

        error,
        loading,
        searchedTodo,
        taskCompleted,
        BorrarTarea,

        searchedDoneTaks,
        taskDeleted,

        openAlert,
        setopenAlert,
        BorrarDef,
    };
};

export {useLogic};