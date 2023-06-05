import React from "react";
import "./styles/score-board.css";
import { useFishContext } from '../context/FishContext';
import { initialFishes as fishes } from '../context/FishContext';
export const ScoreBoard = () => {
  const { fishState } = useFishContext();
  const { currentItem, correctCount, incorrectCount } = fishState;
  const answersLeft = fishes.slice(currentItem).map((fish) => fish.name);
  return(
    <div id="score-board">
        <div>Incorrect 🔻: {incorrectCount}</div>
        <div id="choices-left">
          {answersLeft.map((answer) => (
            <div key={answer} className="choice">
              {answer}
            </div>
          ))}
        </div>
        <div>Correct ✅: {correctCount}</div>
  </div>
  )
}
  

