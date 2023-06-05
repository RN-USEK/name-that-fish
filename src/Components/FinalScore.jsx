import React from "react";
import "./styles/final-score.css";
import { useFishContext } from '../context/FishContext';
import { initialFishes as fishes } from '../context/FishContext';

export const FinalScore = () => {
  const { fishState } = useFishContext();
  const { correctCount } = fishState;
 
  return(
    <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{correctCount}</p>
      <hr />
      <p>{fishes.length}</p>
    </div>
  </div>
  )
   
}