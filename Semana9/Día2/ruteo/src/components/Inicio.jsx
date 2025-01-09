//es el equivalente a un hipervinculo <a> de html, solo que para SPA con react router
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <>
      <h1>Inicio</h1>
      <nav>
        <Link to="/bitacora">Ir a Blog</Link>
      </nav>
    </>
  )
}

export default Inicio