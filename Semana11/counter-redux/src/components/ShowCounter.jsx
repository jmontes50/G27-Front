import { useSelector } from "react-redux"

const ShowCounter = () => {
  // const estado = useSelector((state) => state);
  // console.log(estado)
  const contador = useSelector((state) => state.counter.value)

  return (
    <div>ShowCounter {contador}</div>
  )
}

export default ShowCounter