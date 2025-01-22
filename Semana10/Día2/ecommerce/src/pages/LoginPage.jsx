import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser } = useContext(AuthContext);

  const handleLogin = (data) => {
    console.log(data);
    // registerUser(data.email, data.password)
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <form onSubmit={handleSubmit(handleLogin)} className="w-96">
        <h1 className="mb-4 text-2xl font-semibold">Ingrese</h1>
        <div className="flex flex-col mb-3">
          <label className="text-sm" htmlFor="email">
            Correo:
          </label>
          <input
            type="email"
            className="form-input"
            id="email"
            {...register("email")}
          />
        </div>
        <div className="flex flex-col mb-3">
          <label className="text-sm" htmlFor="password">
            Contraseña:
          </label>
          <input
            type="password"
            className="form-input"
            id="password"
            {...register("password")}
          />
        </div>
        <button className="btn btn-black" type="submit">
          Acceder
        </button>
      </form>
    </div>
  );
};

export default LoginPage;