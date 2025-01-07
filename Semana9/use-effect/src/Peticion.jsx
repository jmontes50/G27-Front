import { useEffect } from "react"

const Peticion = () => {
  
  useEffect(() => {
    fetch("https://67661e3d410f84999656dd1e.mockapi.io/productos")
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((data) => {
      console.table(data)
    })
  }, [])

  return (
    <div>Peticion</div>
  )
}

export default Peticion