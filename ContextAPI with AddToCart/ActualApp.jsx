import React, { useContext } from "react";
import { ProductContext } from "./ProductContext";
import LeftContent from "./leftContent";
import RightContent1 from "./RightContent1";
import RightContent2 from "./RightContent2";

function ActualApp() {
  // const ProductState = useContext(ProductContext);
  // console.log(ProductState);

  return (
    <>
      <center>
        <h1>Welcome to The Store...!</h1>
      </center>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: "50%" }}>
          <LeftContent />
        </div>
        <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
          <div style={{ height: "60vh" }}>
            <RightContent1 />
          </div>
          <div style={{ height: "20vh" }}>
            <RightContent2 />
          </div>
        </div>
      </div>
    </>
  );
}

export default ActualApp;
