import React,{useState} from "react";
import "./mix.css";
import Display from "./dis";
import { evaluate } from "mathjs";
import KeyPad from "./key";

const Cal=()=>{
const [input,setInput]=useState("");
const handleClick = (value) => {
  if (value === "=") {
    try {
      // Remove any invalid characters at the end (e.g., `5+`)
      const sanitizedInput = input.replace(/[+\-*/.]$/, "");
      const result = evaluate(sanitizedInput); // ✅ perform calculation
      setInput(String(result)); // ✅ update input with result
    } catch (error) {
      setInput("Error"); // Show error if expression is invalid
    }
    return;
  }
    else{
        const operators = ["+", "-", "*", "/"];
            const lastChar = input.slice(-1);
            if(
                operators.includes(value)&&(input===""||operators.includes(lastChar))){
                    return;
                }
            if(value==="."){
                const part = input.split(/[+\-*/]/)

                const lastpart = part[part.length-1];
                if(lastpart.includes("."))return;
            }
            setInput((prev)=>prev+value);

    }
};

const clear =()=>setInput("");
return(
<div style={{ maxWidth: "280px", margin: "0 auto" }}>
<Display value={input}/>
<KeyPad onButtonClick={handleClick}/>
<button
  onClick={clear}
  style={{
    marginTop: "10px",
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    fontWeight: "600",
    backgroundColor: "#ffecec",     // soft pinkish red
    color: "  #b71c1c",               // deep red text
    border: "2px solid #a81305ff",    // subtle red border
    borderRadius: "10px",
    cursor: "pointer",
    transition: "background-color 0.2s ease"
  }}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = "#daa5a1ff"; // gentle hover effect
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = "#ffecec"; // original color
  }}
>
  Clear
</button>

</div>
);
}

export default Cal;