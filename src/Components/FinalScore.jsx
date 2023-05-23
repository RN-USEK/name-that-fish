import React from "react";
import "./styles/final-score.css";

export const FinalScore = ({ correctCount }) => {
  return (
    <div id="final-score">
      <h2>Final Score</h2>
      <div>Correct Answers: {correctCount}</div>
    </div>
  );
};
