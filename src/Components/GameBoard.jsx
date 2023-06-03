import React, { useState } from "react";
import "./styles/game-board.css";
import { useFishContext } from '../context/FishContext';

export const GameBoard = () => {
  const { fishState, fishActions } = useFishContext();
  const { initialFishes, currentItem } = fishState;
  const { incrementProperty } = fishActions;
  const [guess, setGuess] = useState('');

  const handleInputChange = ({ target : {value} }) => {
    setGuess(value);
  }
  const currentFish = initialFishes[currentItem];
  const handleSubmit = (e) => {
    e.preventDefault();
    guess === currentFish.name ? 
      incrementProperty('correctCount',1) :
      incrementProperty('incorrectCount',-1);
    incrementProperty ('currentItem', 1);
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
