import { useState, useEffect } from "react";
import Statistics from "./components/Statistics";
import Button from "./components/Button";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const average = [good, neutral, bad];

  const averageScore =
    average.reduce((a, b, index) => {
      if (index === 0) {
        return (a += b * 1);
      } else if (index === 1) {
        return (a += b * 0);
      } else if (index === 2) {
        return (a += b * -1);
      }
    }, 0) / average.reduce((a, b) => a + b, 0);

  const percentage = (good * 100) / all;

  useEffect(() => {
    setAll(good + neutral + bad);
  }, [good, neutral, bad, average]);
  return (
    <>
      <h1>Give feedback</h1>
      <Button
        text="good"
        setter={() => setGood((previousState) => previousState + 1)}
      />

      <Button
        text="neutral"
        setter={() => setNeutral((previousState) => previousState + 1)}
      />

      <Button
        text="bad"
        setter={() => setBad((previousState) => previousState + 1)}
      />
      {good || neutral || bad ? (
        <>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            all={all}
            averageScore={averageScore}
            percentage={percentage}
          />
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};

export default App;
