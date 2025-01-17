import { createContext, useState } from "react";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //definir la lógica que queremos que se maneje en el contexto, acciones a realizar
  const addProductToCart = (product) => {
    setCart([...cart, product]);
  }

  return (
    <CartContext.Provider value={{cart, addProductToCart}}>
      { children }
    </CartContext.Provider>
  )
}

export {
  CartContext,
  CartContextProvider
}