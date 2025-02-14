import React from "react";
import "../styles/Button.css"; 

const Button = ({ type, variant, children }) => {
  return (
    <button className={`btn ${variant}`} type={type}>
      {children}
    </button>
  );
};

export default Button;
