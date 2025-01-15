import { createContext, useState, useEffect } from "react";

//1. tenemos que crearlo mediante createContext
const NumberContext = createContext();

//2. Componente que sirva de envoltura
//Este componente usara los props children para permitir dibujar todo lo que llegue a los children
//dentro de el
const NumberContextProvider = ({ children }) => {
  //3, aquí podemos hacer uso de useState, useEffect, otras funciones, lógica para definir que y como se va a compartir
  const [contador, setContador] = useState(10);

  useEffect(() => {
    console.log("Contador!:", contador);
    //verifique una configuración
  },[contador])
  //4. indicamos que vamos a retornar mediante el Provider generado por createContext
  //en la propiedad value se comparte lo que deseamos compartir con otros componentes
  //esto suele ser un objeto
  return (<NumberContext.Provider value={{ contador, setContador }}>
    {/* la idea es que este Provider sea una envoltura transparente y por eso usaremos children */}
    { children }
  </NumberContext.Provider>)
}

export {
  NumberContext,
  NumberContextProvider
}