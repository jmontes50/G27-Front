const FormCheckout = () => {
  return (
    <form>
      <div className="grid grid-cols-1 gap-5 py-4">
        <div className="flex flex-col">
          <label htmlFor="fullname">Nombre Completo:</label>
          <input type="text" className="form-input"/>
        </div>
      </div>
    </form>
  );
};

export default FormCheckout;
