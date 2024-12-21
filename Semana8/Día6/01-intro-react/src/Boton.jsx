const Boton = ({ texto, accion }) => {

    //vamos a manejar varios eventos
    //onClick, onChange, onSubmit
    //todos los eventos tendrán el prefijo on
    return (
        <button onClick={accion}>
            {texto}
        </button>
    );
}

export default Boton;