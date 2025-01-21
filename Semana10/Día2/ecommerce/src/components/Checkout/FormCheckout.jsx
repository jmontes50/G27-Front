const FormCheckout = () => {
  return (
    <form>
      <div className="grid grid-cols-1 gap-5 py-4">
        <div className="flex flex-col">
          <label htmlFor="fullname">Nombre Completo:</label>
          <input type="text" className="form-input" id="fullname" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="address">Dirección:</label>
          <input type="text" className="form-input" id="address" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="telephone">Número telefónico:</label>
          <input type="text" className="form-input" id="telephone" />
        </div>
        <button className="btn btn-black" type="submit">
          Validar Datos
        </button>
      </div>
    </form>
  );
};

export default FormCheckout;
