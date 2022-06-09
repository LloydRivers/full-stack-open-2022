import { Header, Content, Total } from "./components";

const App = () => {
  const course = "Half Stack application development";
  const parts = {
    part1: "Fundamentals of React",
    part2: "Using props to pass data",
    part3: "State of a component",
  };
  const exercises = {
    exercises1: 10,
    exercises2: 7,
    exercises3: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} exercises={exercises} />
      <Total exercises={exercises} />
    </div>
  );
};

export default App;
