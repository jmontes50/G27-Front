import { useParams } from "react-router-dom";

const Info = () => {
  //useParams me permite acceder a los parámetros de la url
  //si mi ruta configurada es "/info/:cat" y la url es
  // localhost/info/libros podre recibir el string libros
  /** como un objeto
   *  { cat: "libros" }
   */
  const { cat } = useParams();
  // console.log(useParams());
  console.log(cat);

  const data = {
    electronica: ["Smartphone", "Tablet", "Audifonos"],
    libros: [
      "100 años de soledad",
      "El Sr. de los anillos",
      "Un mundo para Julius",
    ],
  };

  return (
    <div>
      <h1>{cat}</h1>
      {/* data.electronica data['electronica] */}
      {data[cat].map((item, i) => (
        <p key={i}>{item}</p>
      ))}
    </div>
  );
};

export default Info;
