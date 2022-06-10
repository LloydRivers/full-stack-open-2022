import React from "react";

const Total = ({ parts }) => {
  const value = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <>
      <p>Number of exercises: {value}</p>
    </>
  );
};

export default Total;
