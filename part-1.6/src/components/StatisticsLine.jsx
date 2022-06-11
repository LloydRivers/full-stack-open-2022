import React from "react";

const StatisticsLine = ({ label, value, other }) => {
  return (
    <>
      <td>{label}</td>
      <td>{value}</td>
      <td>{other ? other : ""}</td>
    </>
  );
};

export default StatisticsLine;
