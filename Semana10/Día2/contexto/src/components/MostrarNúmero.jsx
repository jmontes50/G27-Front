import { useContext } from "react";
import { NumberContext } from "../context/NumberContext";

const MostrarNúmero = () => {
  const { contador } = useContext(NumberContext);
  // console.log(contexto);

  return (
    <div>
      <h3>Mostrar Número</h3>
      <h4>{contador}</h4>
    </div>
  );
};

export default MostrarNúmero;
