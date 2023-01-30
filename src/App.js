import React from 'react';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoAdd } from './TodoAdd';
import { TodoSearch } from './TodoSearch';
import { TodoTasks } from './TodoTasks';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { DoneList } from './DoneList';
import { DoneItem } from './DoneItem';

import { Modal } from './Modal/Modal';
import { Alert } from './Modal/Alert';

function useLocalStorage(itemName, initialValue) {
  const [error, setError] =React.useState(false)
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try{
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
      
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        };
  
        setItem(parsedItem);
        setLoading(false);
      } catch(error) {
        setError(error);
      }
    }, 1000);
  })

  const guardarItem = (newItem) => {
    try{
      const itemStringueados = JSON.stringify(newItem);
      localStorage.setItem(itemName, itemStringueados);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return {
    item,
    guardarItem,
    loading,
    error
  };
}


function App() {
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
  }

  // fdasfdsafdsfdsafdsaf

  return (
    <React.Fragment>
      <TodoCounter
        totalTodos={totalTodos}
        completed={completedToDos}
      />
      <TodoAdd
      anadir={anadir} />
      <TodoSearch
        searchValue={searchValue}
        setsearchValue={setsearchValue}
      />
      <TodoTasks>
        <TodoList>
          {error && <p>Desespérate, hubo un error...</p>}
          {loading && <p>Estamos cargando, no te desesperes</p>}
          {(!loading && !searchedTodo.length) && <p>¡Crea tu primer Todo!</p>}

          {searchedTodo.map(tOdo => (
            <TodoItem 
              key={tOdo.tarea} 
              tarea={tOdo.tarea} 
              completed={tOdo.completed}
              completedFcn={() => taskCompleted(tOdo.tarea)}
              borrarTarea={() => BorrarTarea(tOdo.tarea)} />
          ))}
        </TodoList>
        <DoneList>
          {searchedDoneTaks.map(done => (
              <DoneItem 
                key={done.tarea} 
                tarea={done.tarea} 
                completed={done.completed}
                deletedFcn={() => taskDeleted(done.tarea)} />
          ))}
        </DoneList>
      </TodoTasks>
      
      {!!openAlert && (
        <Modal>
          <Alert 
          setopenAlert={setopenAlert}
          BorrarDef={BorrarDef}
           />
        </Modal>
      )}
    </React.Fragment>
  );
}

export default App;
