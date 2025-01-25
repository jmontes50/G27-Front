import { useSelector, useDispatch } from "react-redux";
import { increment, setCounter } from "../app/counter/counterSlice";

const ShowCounter = () => {
  // const estado = useSelector((state) => state);
  // console.log(estado)
  const contador = useSelector((state) => state.counter.value)

  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(increment());

  const handleSetValue = () => dispatch(setCounter(100));

  return (
    <>
      <div>ShowCounter: {contador}</div>
      <button onClick={(handleIncrement)}>
        Incrementar
      </button>
      <button onClick={(handleSetValue)}>
        Cambiar a 100
      </button>
    </>
  )
}

export default ShowCounter