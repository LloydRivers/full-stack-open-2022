import React from "react";

const Total = ({ parts }) => {
  const total = parts.reduce((acc, curr) => acc + curr.exercises, 0);
  return <div>Total of {total} exercises</div>;
};

export default Total;
