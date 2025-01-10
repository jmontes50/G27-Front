const TableData = (props) => {
  const { data, cabeceras } = props;
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
