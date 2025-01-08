const Task = ({ textoTarea, eliminarTarea, posicion }) => {
  // console.log({ textoTarea, eliminarTarea, posicion });
  return (
    //react maneja las propiedades de css como un objeto
    //las 1ras llaves son para indicar que usaremos JS
    //las 2das es para indicar un objeto
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <li>{textoTarea}</li>
      <button onClick={() => {eliminarTarea(posicion)}}>
        ✖️
      </button>
    </div>
  );
};

export default Task;  
