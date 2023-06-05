import "./App.css";
import React, { useEffect, useState } from "react";
import { GameBoard } from "./Components/GameBoard";
import { ScoreBoard } from "./Components/ScoreBoard";
import { FinalScore } from "./Components/FinalScore";
import "./Components/styles/final-score.css";
import {initialFishes, useFishContext} from './context/FishContext';
import { initialFishes as fishes } from './context/FishContext';

function App() {
  const { fishState } = useFishContext();
  const { currentItem } = fishState;
  return (
    <div>
      {!(currentItem === fishes.length) ? (
        <>
          <ScoreBoard />
          <GameBoard />
        </>
      ) : (
        <FinalScore />
      )}
    </div>
  );
};

export default App;
