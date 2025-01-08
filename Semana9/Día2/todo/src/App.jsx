import { useState, useEffect, useRef } from 'react';
import Task from './components/Task';

const App = () => {
  const [tareas, setTareas] = useState([]);

  //es una referencia, pueden pensar en esto como un id que ofrece react para poder acceder a un elemento del DOM
  const nuevaTareaRef = useRef(null);

  const manejarClick = () => {
    // console.log(nuevaTareaRef.current.value);
    /**1, creamos nuevaTarea que contendra el value del input
     * 2, mediante un spread operator, hacemos una copia tareas y agregamos nuevaTarea
     * 3, actualizamos el estado de tareas con la copia que incluye nuevaTarea
     */
    const nuevaTarea = nuevaTareaRef.current.value;
    setTareas([...tareas, nuevaTarea]);
    //limpiar el input
    nuevaTareaRef.current.value = '';
  }

  const eliminarTarea = (posicion) => {
    console.log(posicion)
    const copiaTareas = [...tareas];
    //quiero eliminar 01 elemento en base a la posición recibida
    copiaTareas.splice(posicion, 1)
    //actualizamos de vuelta el estado
    setTareas(copiaTareas);
  }

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <label htmlFor='nuevaTarea'>Nueva Tarea</label>
        <input 
          id="nuevaTarea"
          type="text" 
          placeholder='Escribe una nueva tarea'
          ref={nuevaTareaRef}
        />
        <button onClick={manejarClick}>➕</button>
        <hr/>
        {tareas.map((tarea, indice) => (
          <Task 
            key={indice} 
            textoTarea={tarea} 
            eliminarTarea={eliminarTarea}
            posicion={indice}
          />
        ))}
      </div>
    </div>
  )
}

export default App