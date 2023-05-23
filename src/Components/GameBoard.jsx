import React, { useState } from "react";
import "./styles/game-board.css";

export const GameBoard = ({
  correctCount,
  updateCorrectCount,
  incorrectCount,
  updateIncorrectCount,
  answersLeft,
  updateAnswersLeft,
  initialFishes,
}) => {
  const [nextFishIndex, setNextFishIndex] = useState(0);
  const nextFishToName = initialFishes[nextFishIndex];

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInput = e.target.elements["fish-guess"].value;
    const isGuessCorrect = userInput === nextFishToName.name;

    if (isGuessCorrect) {
      updateCorrectCount(correctCount + 1);
    } else {
      updateIncorrectCount(incorrectCount + 1);
    }

    updateAnswersLeft(answersLeft.filter((answer) => answer !== nextFishToName.name));
    setNextFishIndex((nextFishIndex + 1) % initialFishes.length);
    e.target.reset();
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form" onSubmit={handleSubmit}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input type="text" name="fish-guess" />
        <input type="submit" />
      </form>
    </div>
  );
};
