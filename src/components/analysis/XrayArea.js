import React, { useState } from "react";
function XrayArea() {
  const[activeNum,setActiveNum]=useState(-1)
  
  return (
    <>
      <div className="" style={{ width: "760px" }}>
          <div className="d-flex">
            <img
              alt=""
              className={activeNum===0?"xray-img active":"xray-img"}
              src="./images/LPA.jpg"
              onMouseDown={()=>setActiveNum(0)}
            ></img>
            <img
              alt=""
              className={activeNum===1?"xray-img active":"xray-img"}
              src="./images/RPA.jpg"
              onMouseDown={()=>setActiveNum(1)}
            ></img>
          </div>
          <div className="d-flex">
            <img
              alt=""
              className={activeNum===2?"xray-img active":"xray-img"}
              src="./images/LLAT.jpg"
              onMouseDown={()=>setActiveNum(2)}
            ></img>
            <img
              alt=""
              className={activeNum===3?"xray-img active":"xray-img"}
              src="./images/RLAT.jpg"
              onMouseDown={()=>setActiveNum(3)}
            ></img>
          </div>
         
      </div>
    </>
  );
}
export default XrayArea;
