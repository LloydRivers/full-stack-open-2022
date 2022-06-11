import React from "react";
import Header from "./Header";
import Part from "./Part";
import Total from "./Total";

const Course = ({ courses }) => {
  return (
    <>
      <Header name={courses.name} />
      {courses.parts.map((part) => {
        return <Part key={part.id} part={part} />;
      })}
      <Total parts={courses.parts} />
    </>
  );
};

export default Course;
