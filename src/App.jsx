import "./App.css";
import React, { useEffect, useState } from "react";
import { GameBoard } from "./Components/GameBoard";
import { ScoreBoard } from "./Components/ScoreBoard";
import { FinalScore } from "./Components/FinalScore";
import "./Components/styles/final-score.css";
import {useFishContext} from './context/FishContext';

function App() {
  const { fishState } = useFishContext();
  const { isGameOver } = fishState;
  return (
    <div>
      {!isGameOver ? (
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
