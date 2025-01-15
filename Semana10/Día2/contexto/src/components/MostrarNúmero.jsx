import { useContext } from "react";
import { NumberContext } from "../context/NumberContext";

const MostrarNúmero = () => {
  const { contador, setContador } = useContext(NumberContext);
  // console.log(contexto);

  const manejarClick = () => {
    setContador(contador + 10);
  }

  return (
    <div>
      <h3>Mostrar Número</h3>
      <h4>{contador}</h4>
      <button onClick={manejarClick}>
        Incrementar
      </button>
    </div>
  );
};

export default MostrarNúmero;
