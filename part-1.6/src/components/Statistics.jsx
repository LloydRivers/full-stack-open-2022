import React from "react";
import StatisticsLine from "./StatisticsLine";
// Refactor your application so that displaying the statistics is extracted into its own Statistics component.

const Statistics = ({ good, neutral, bad, all, averageScore, percentage }) => {
  return (
    <table>
      <tbody>
        <tr>
          <StatisticsLine label="good:" value={good} />
        </tr>
        <tr>
          <StatisticsLine label="neutral:" value={neutral} />
        </tr>
        <tr>
          <StatisticsLine label="bad:" value={bad} />
        </tr>
        <tr>
          <StatisticsLine label="all:" value={all} />
        </tr>
        <tr>
          <StatisticsLine label="average:" value={averageScore} />
        </tr>
        <tr>
          <StatisticsLine
            label="positive:"
            value={percentage ? percentage : 0}
            other="%"
          />
        </tr>
      </tbody>
    </table>
  );
};

export default Statistics;
