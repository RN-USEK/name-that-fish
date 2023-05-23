import "./App.css";
import React, { useState } from "react";
import { GameBoard } from "./Components/GameBoard";
import { ScoreBoard } from "./Components/ScoreBoard";
import { FinalScore } from "./Components/FinalScore";
import "./Components/styles/final-score.css";
import { Images } from "./assets/images";
 
const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];
function App() {
  const [gameOver, setGameOver] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [answersLeft, setAnswersLeft] = useState(initialFishes.map((fish) => fish.name));
  const [incorrectCount, setIncorrectCount] = useState(0);

  const handleGameEnd = (correctAnswers, remainingAnswers) => {
    setCorrectCount(correctAnswers);
    setAnswersLeft(remainingAnswers);
    setGameOver(true);
  };

  const updateCorrectCount = (newValue) => {
    setCorrectCount(newValue);
  };
  const updateIncorrectCount = (newValue) => {
    setIncorrectCount(newValue);
  };
  const updateAnswersLeft = (newValue) => {
    setAnswersLeft(newValue);
    if (newValue.length === 0) {
      setGameOver(true);
    }
  };

  return (
    <div>
      {!gameOver ? (
        <>
          <ScoreBoard 
            correctCount={correctCount} 
            answersLeft={answersLeft} 
            incorrectCount={incorrectCount} 
          />
          <GameBoard  
            onGameEnd={handleGameEnd} 
            correctCount={correctCount}
            updateCorrectCount={updateCorrectCount} 
            incorrectCount={incorrectCount} 
            updateIncorrectCount={updateIncorrectCount}
            answersLeft={answersLeft}
            updateAnswersLeft={updateAnswersLeft}
            initialFishes={initialFishes}
          />
        </>
      ) : (
        <FinalScore 
          correctCount={correctCount} 
          totalCount={initialFishes.length} />
      )}
    </div>
  );
};

export default App;
