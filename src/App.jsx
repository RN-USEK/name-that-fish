import "./App.css";
import React, { useState } from "react";
import { GameBoard } from "./Components/GameBoard";
import { ScoreBoard } from "./Components/ScoreBoard";
import { FinalScore } from "./Components/FinalScore";
import "./Components/styles/final-score.css";
import { Images } from "./assets/images";
 
const initialFishes = [
  { name: "trout", url: Images.trout },
  { name: "salmon", url: Images.salmon },
  { name: "tuna", url: Images.tuna },
  { name: "shark", url: Images.shark },
];
function App() {
  const [currentItem, setCurrentItem] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [answersLeft, setAnswersLeft] = useState(initialFishes.map((fish) => fish.name));
  const [incorrectCount, setIncorrectCount] = useState(0);

  

  const isGameOver = currentItem === initialFishes.length;
 
  const updateCorrectCount = (newValue) => {
    setAnswersLeft(initialFishes.slice(currentItem+1).map((fish) => fish.name));
    setCorrectCount(newValue);
  };
  const updateIncorrectCount = (newValue) => {
    setAnswersLeft(initialFishes.slice(currentItem+1).map((fish) => fish.name));
    setIncorrectCount(newValue);
  };

  return (
    <div>
      {!isGameOver ? (
        <>
          <ScoreBoard 
            correctCount={correctCount} 
            answersLeft={answersLeft} 
            incorrectCount={incorrectCount} 
          />
          <GameBoard  
            correctCount={correctCount}
            updateCorrectCount={updateCorrectCount} 
            incorrectCount={incorrectCount} 
            updateIncorrectCount={updateIncorrectCount}
            currentItem={currentItem}
            setCurrentItem={setCurrentItem}
            currentFish={initialFishes[currentItem]}
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
