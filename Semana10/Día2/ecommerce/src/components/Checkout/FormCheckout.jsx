import { useForm } from "react-hook-form";

const FormCheckout = () => {
  const { register, handleSubmit, formState: { errors }} = useForm();

  const getDataSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(getDataSubmit)}>
      <div className="grid grid-cols-1 gap-5 py-4">
        <div className="flex flex-col">
          <label htmlFor="fullname">Nombre Completo:</label>
          <input type="text" className="form-input" id="fullname" {...register("fullname")} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="address">Dirección:</label>
          <input type="text" className="form-input" id="address" {...register("address")}/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="telephone">Número telefónico:</label>
          <input type="text" className="form-input" id="telephone" {...register("telephone")}/>
        </div>
        <button className="btn btn-black" type="submit">
          Validar Datos
        </button>
      </div>
    </form>
  );
};

export default FormCheckout;
