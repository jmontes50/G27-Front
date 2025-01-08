import { useState, useEffect, useRef } from 'react'

const App = () => {
  //es una referencia, pueden pensar en esto como un id que ofrece react para poder acceder a un elemento del DOM
  const nuevaTareaRef = useRef(null);

  const manejarClick = () => {
    console.log(nuevaTareaRef.current.value);
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