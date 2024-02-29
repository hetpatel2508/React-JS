import { createContext, useState } from "react";

export const ProductContext = createContext(null);

export const ProductProvider = (props) => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Dell G15",
      price: 115000,
    },
    {
      id: 2,
      name: "Iphone 14",
      price: 74000,
    },
    {
      id: 3,
      name: "MacBook M1",
      price: 80000,
    },
    {
      id: 4,
      name: "Apple Airpods",
      price: 15000,
    },
    {
      id: 5,
      name: "Logitech Keyboard",
      price: 20000,
    },
    {
      id: 6,
      name: "Apple Pen",
      price: 2500,
    },
  ]);

  const [cart, setCart] = useState([]);

  
  return (
    <ProductContext.Provider value={{ cart, setCart, data, setData }}>
      {props.children}
    </ProductContext.Provider>
  );
};
