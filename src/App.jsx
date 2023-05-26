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
  const [incorrectCount, setIncorrectCount] = useState(0);
  const isGameOver = currentItem === initialFishes.length;
  const answersLeft = initialFishes.slice(currentItem).map((fish) => fish.name);
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
            updateCorrectCount={setCorrectCount} 
            incorrectCount={incorrectCount} 
            updateIncorrectCount={setIncorrectCount}
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
