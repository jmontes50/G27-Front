const TableCart = ({ cart }) => {
  return (
    <table className="w-full">
      <thead className="text-xs uppercase">
        <tr>
          <th className="px-6 py-3 text-left">Producto</th>
          <th className="px-6 py-3 text-left">Precio</th>
          <th className="px-6 py-3 text-left">Cantidad</th>
          <th className="px-6 py-3 text-left">Subtotal</th>
        </tr>
      </thead>
    </table>
  );
};

export default TableCart;
