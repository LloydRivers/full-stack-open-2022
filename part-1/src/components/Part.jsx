import React from "react";

function Part({ part }) {
  console.log("Inside parts", part);
  return (
    <>
      <p>Name: {part.name}.</p>
      <span> Exercises: {part.exercises}.</span>
    </>
  );
}

export default Part;
