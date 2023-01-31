import React from 'react';

//Style and components
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoAdd } from './TodoAdd';
import { TodoSearch } from './TodoSearch';
import { TodoTasks } from './TodoTasks';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { DoneList } from './DoneList';
import { DoneItem } from './DoneItem';
//Style and components

//Modals
import { Modal } from './Modal/Modal';
import { Alert } from './Modal/Alert';
//Modals

//Custom hooks and others
import { useLogic } from './Custom Hooks/CHlogic';
import { Error } from './Interfaces/Error';
import { Loading } from './Interfaces/Loading';
import { EmptyList } from './Interfaces/EmptyList';
//Custom hooks and others

function App() {
  const {
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
} = useLogic();

  return (
    <React.Fragment>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {!loading && (
        <>
          <TodoCounter>
            totalTodos={totalTodos}
            completed={completedToDos}
          </TodoCounter> 

          <TodoAdd
          anadir={anadir} />

          <TodoSearch
            searchValue={searchValue}
            setsearchValue={setsearchValue} />

          <TodoTasks>
            <TodoList>
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
        </>

      )}
      {(!loading && !totalTodos) && <EmptyList />}
      
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
