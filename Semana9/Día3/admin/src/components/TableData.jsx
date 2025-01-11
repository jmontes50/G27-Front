import { Link } from "react-router-dom"

const TableData = (props) => {
  const { data, cabeceras, accionEliminar } = props;
  console.table(data);

  return (
      <table className="table">
        <thead>
          <tr>
            {cabeceras.map((cab, i) => (
              <th key={i}>{cab}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              {/* genere los td, otro renderizado de listas*/}
              {cabeceras.map((cab, i) => (
                <td key={i}>{item[cab]}</td>
              ))}
              <td className="d-flex">
                <Link 
                  to={`/editproduct/${item.id}`}
                  className="btn btn-warning btn-sm me-2"
                >
                  <i className="fa-solid fa-pen"></i>
                </Link>
                {/* botón eliminar */}
                <button 
                  className="btn btn-danger btn-sm"
                  onClick={() => {
                    accionEliminar(item.id)
                  }}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
          {/**
         * data.map((item) => (
          <tr key={item.id}>
            <td>{item.nombre}</td>
            <td>{item.descripcion}</td>
          </tr>
        ))*/}
        </tbody>
      </table>
  );
};

export default TableData;
