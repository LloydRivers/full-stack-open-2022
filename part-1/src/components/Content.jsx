import React from "react";
import Part from "./Part";

const Content = ({ parts, exercises }) => {
  const { part1, part2, part3 } = parts;
  const { exercise1, exercise2, exercise3 } = exercises;
  return (
    <div>
      <Part part1={part1} exercise1={exercise1} />
      <Part part2={part2} exercise2={exercise2} />
      <Part part3={part3} exercise3={exercise3} />
    </div>
  );
};

export default Content;
