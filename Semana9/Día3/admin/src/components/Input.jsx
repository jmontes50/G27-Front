//La idea de crear un componente input es que todos los input se parecen, usaremos componentes controlados para asociar el value de cada input a la propiedad de un estado(useState)
const Input = ({texto, manejarValor}) => {
  return (
    <div className="mb-3">
      <label htmlFor={texto}>{texto}</label>
      <input
        type="text"
        placeholder={`Ingrese ${texto}`}
        value={valor[texto]}
        onChange={manejarValor}
        name={texto}
        id={texto}
        className="form-control"
      />
    </div>
  )
}

export default Input