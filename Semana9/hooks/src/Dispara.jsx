const Dispara = ({
  texto, 
  ejecutar,
  ejecutarConValor
}) => {
  // console.log(ejecutar);
  return (
    <>
      <button 
        onClick={ejecutar}
      >
      {texto}
      </button>
      <button 
        onClick={() => {
          ejecutarConValor(1000)
        }}
      >
        Cambiar a 1000
      </button>
    </>
  )
}

export default Dispara