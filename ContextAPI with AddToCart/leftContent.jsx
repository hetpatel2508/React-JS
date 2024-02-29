import React from "react";
import { ProductContext } from "./ProductContext";

function LeftContent() {
  const ProductState = React.useContext(ProductContext);

    function handleCartEvent(data){
        ProductState.setCart((prevCart)=>[...prevCart,data])
    }

  function Cards() {
    return (
      <>
        {ProductState.data.map((data, index) => (
          <div
            key={index}
            style={{
              width: "300px",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "EEEEEE",
              border: "1",
              borderStyle: "solid",
              borderBlockColor: "black",
              borderRadius: "15px",
              textAlign:'center',
              fontSize:'25px',
              marginLeft:'15px',
              marginBottom:'15px',
            }}
          >
            <div>index = {data.id}</div>
            <div>Name = {data.name}</div>
            <div>Price = {data.price}</div>
            <button onClick={()=>{handleCartEvent(data)}} style={{width:'100px',marginLeft:'100px',}}>Add To Cart</button>
          </div>
        ))}
      </>
    );
  }

  return (
    <>
      <Cards />
    </>
  );
}

export default LeftContent;
