import React from "react";
import { ProductContext } from "./ProductContext";

function RightContent2(){

  const ProductState = React.useContext(ProductContext);
  const [tempName,setTempName]= React.useState('')
  const [tempPrice,setTempPrice]= React.useState(0)

  function handleClickUpdate(){
    const newProduct = {
        id: ProductState.data.length + 1, // Assuming each product has a unique id
        name: tempName,
        price: tempPrice
      };

      ProductState.setData(prevData => [...prevData, newProduct]);

      setTempName('');
      setTempPrice(0);
    }

    return<>
    <input type="text" onChange={(e)=>{setTempName(e.target.value)}} value={tempName} placeholder="Enter Product Name : "/><br /><br />
    <input type="number" onChange={(e)=>{setTempPrice(e.target.value)}} value={tempPrice} /><br /><br />
    <button onClick={()=>{handleClickUpdate()}}>Update</button>
    </>
}

export default RightContent2;