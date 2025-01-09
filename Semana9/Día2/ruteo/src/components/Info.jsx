import { useParams } from "react-router-dom";

const Info = () => {
  const { cat } = useParams();
  console.log(cat);

  const data = {
    electronica: ["Smartphone", "Tablet", "Audifonos"],
    libros: [
      "100 años de soledad",
      "El Sr. de los anillos",
      "Un mundo para Julius",
    ],
  };

  return <div>Info</div>;
};

export default Info;
