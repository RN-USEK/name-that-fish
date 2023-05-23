import React from "react";
import "./styles/score-board.css";

export const ScoreBoard = ({ correctCount, answersLeft, incorrectCount }) => {
  const renderChoicesLeft = () => (
    answersLeft.map((answer) => (
      <div key={answer} className="choice">
        {answer}
      </div>
    ))
  );

  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {renderChoicesLeft()}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
};
