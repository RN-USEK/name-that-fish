import React, { useState } from "react";
import "./styles/game-board.css";

export const GameBoard = ({
  correctCount,
  updateCorrectCount,
  incorrectCount,
  updateIncorrectCount,
  currentItem,
  setCurrentItem,
  currentFish,
}) => {
  const [guess, setGuess] = useState('');

  const handleInputChange = ({ target : {value} }) => {
    setGuess(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (guess === currentFish.name) {
      updateCorrectCount(correctCount + 1);
    } else {
      updateIncorrectCount(incorrectCount + 1);
    }

    setCurrentItem (currentItem + 1);
   setGuess('');
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={currentFish.url} alt={currentFish.name} />
      </div>
      <form id="fish-guess-form" onSubmit={handleSubmit}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input type="text" name="fish-guess" value = {guess} onChange={handleInputChange}/>
        <input type="submit" />
      </form>
    </div>
  );
};
