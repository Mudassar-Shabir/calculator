import React  from "react";
import "./mix.css";
import Button from "./btn";

const Buttons=[
    "7","8","9","/",
     "4","5","6","*",
      "1","2","3","-",
       "0",".","=","+",
];
const KeyPad=({onButtonClick})=>{
return(
    <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 60px)",
        gap: "10px",
        padding: "20px",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        maxWidth: "300px",
        margin: "0 auto"
      }}>
        {Buttons.map((btn) => (
        <Button key={btn} value={btn} onClick={onButtonClick} />
      ))}
    </div>
);
};
export default KeyPad;