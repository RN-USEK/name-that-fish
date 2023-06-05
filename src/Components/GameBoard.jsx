import React, { useState } from "react";
import "./styles/game-board.css";
import { useFishContext } from '../context/FishContext';
import { initialFishes as fishes } from '../context/FishContext';

export const GameBoard = () => {
  const { fishState, fishSetters } = useFishContext();
  const { currentItem } = fishState;
  const { setCorrectCount, setIncorrectCount, setCurrentItem } = fishSetters;
  const [guess, setGuess] = useState('');
  const currentFish = fishes[currentItem];

  const handleInputChange = ({ target : {value} }) => {
    setGuess(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    guess === currentFish.name
    ? setCorrectCount(prevCount => prevCount + 1)
    : setIncorrectCount(prevCount => prevCount + 1);
  
    setCurrentItem(prevItem => prevItem + 1);
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
