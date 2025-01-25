import { useSelector, useDispatch } from "react-redux";
import { increment } from "../app/counter/counterSlice";

const ShowCounter = () => {
  // const estado = useSelector((state) => state);
  // console.log(estado)
  const contador = useSelector((state) => state.counter.value)

  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(increment());

  return (
    <>
      <div>ShowCounter: {contador}</div>
      <button onClick={(handleIncrement)}>
        Incrementar
      </button>
    </>
  )
}

export default ShowCounter