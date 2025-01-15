import MostrarNúmero from "./MostrarNúmero";

const Padre = (props) => {
  console.log(props);
  const { children, titulo } = props;
  return (
    <div>
      <h2>Parent - {titulo}</h2>
      <hr/>
      <MostrarNúmero />
      <hr />
      {children}
    </div>
  );
};

export default Padre;
