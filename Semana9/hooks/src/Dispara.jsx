const Dispara = ({texto, ejecutar}) => {
  // console.log(ejecutar);
  return (
    <button 
      onClick={ejecutar}
    >
     {texto}
    </button>
  )
}

export default Dispara