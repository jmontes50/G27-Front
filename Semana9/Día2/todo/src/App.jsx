import { useState, useEffect, useRef } from 'react'

const App = () => {
  const [tareas, setTareas] = useState([]);
  console.log(tareas)

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
      </div>
    </div>
  )
}

export default App