import React from "react";

const Button = ({ text, setter }) => {
  return <button onClick={setter}>{text}</button>;
};
export default Button;
