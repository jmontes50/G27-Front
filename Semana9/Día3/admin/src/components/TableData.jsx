const TableData = (props) => {
  const { data } = props;
  console.table(data)
  return (
    <table className="table">
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.nombre}</td>
            <td>{item.descripcion}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TableData