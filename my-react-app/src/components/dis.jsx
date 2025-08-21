import React from "react";

const Display = ({ value }) => {
  const style = {
    minHeight: "70px",
    padding: "15px 20px",
    fontSize: "2.5rem",
    textAlign: "right",
    borderRadius: "12px",
    border: "2px solid #999",
    background: "linear-gradient(to bottom, #d2e0d2, #b5cdb5)",
    color: "#2e4d2e",
    boxShadow: "inset 0 3px 5px rgba(0,0,0,0.2)",
    fontFamily: "'Courier New', monospace",
    fontWeight: "bold",
    letterSpacing: "2px",
    overflowX: "auto",
    whiteSpace: "nowrap",
    userSelect: "none",
  };

  return (
    <div style={style}>
      {value || "0"}
    </div>
  );
};

export default Display;
