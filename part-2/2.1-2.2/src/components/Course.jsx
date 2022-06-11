import React from "react";
import Header from "./Header";
import Part from "./Part";
import Total from "./Total";

const Course = ({ courses }) => {
  return (
    <>
      {courses.map((course) => {
        return (
          <>
            <Header name={course.name} />
            {course.parts.map((part) => {
              return <Part part={part} />;
            })}
            <Total parts={course.parts} />
          </>
        );
      })}
    </>
  );
};

export default Course;
