import React, { useState } from "react";
import "./styles/game-board.css";

export const GameBoard = ({correctCount, updateCorrectCount, incorrectCount, updateIncorrectCount,answersLeft,updateAnswersLeft, initialFishes}) => {
  const [nextFishToName, setNextFishToName] = useState(initialFishes[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInput = e.target.elements["fish-guess"].value;
    if (userInput === nextFishToName.name) {
      updateCorrectCount(correctCount + 1);
    } else {
      updateIncorrectCount(incorrectCount + 1);
    }
    updateAnswersLeft(answersLeft.filter((answer) => answer !== nextFishToName.name));
    const currentIndex = initialFishes.findIndex(
      (fish) => fish.name === nextFishToName.name
    );
    const nextIndex = (currentIndex + 1) % initialFishes.length;
    setNextFishToName(initialFishes[nextIndex]);
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
