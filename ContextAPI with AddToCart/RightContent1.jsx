import React from "react";
import { ProductContext } from "./ProductContext";

function RightContent1() {
  const ProductState = React.useContext(ProductContext);
  
  const handleRemoveCart = (itemToRemove) => {
    ProductState.setCart((prevCart) => 
      prevCart.filter((item) => item.id !== itemToRemove.id)  
      /*This line uses the filter method to create a new array containing only 
      the items from prevCart that satisfy the condition specified in the callback function.*/
    );
  };

  function Cart() {
    if (ProductState.cart == null) {
      return null;
    }
    return (
      <>
        {ProductState.cart.map((data, index) => (
          <div
            key={index}
            style={{ display: "flex", flexDirection: "row", gap: "15px" }}
          >
            <span>index = {data.id}</span>
            <span>Name = {data.name}</span>
            <span>Price = {data.price}</span>
            <button
              onClick={()=>{handleRemoveCart(data)}}
              style={{ width: "150px", marginLeft: "100px" }}
            >
              Remove From Cart
            </button>
          </div>
        ))}
      </>
    );
  }

  return (
    <>
      <Cart />
    </>
  );
}

export default RightContent1;
