import React, { useState } from "react";

const Button = ({ value, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyle = {
    padding: "15px",
    fontSize: "20px",
    border: "1px solid #f10f0fff",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const specialStyle = {
    "=": { backgroundColor: "#66bb6a", color: "white" },
    "C": { backgroundColor: "#ef5350", color: "white" },
    "+": { backgroundColor: "#ffd54f" },
    "-": { backgroundColor: "#ffd54f" },
    "*": { backgroundColor: "#ffd54f" },
    "/": { backgroundColor: "#ffd54f" },
  };

  const hoverStyle = {
    backgroundColor: "#eaeaea", // default hover background
    ...(specialStyle[value] && { filter: "brightness(90%)" }) // darken special buttons
  };

  const mergedStyle = {
    ...baseStyle,
    ...(specialStyle[value] || {}),
    ...(isHovered ? hoverStyle : {}),
  };

  return (
    <button
      style={mergedStyle}
      onClick={() => onClick(value)}
      type="button"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {value}
    </button>
  );
};

export default Button;
