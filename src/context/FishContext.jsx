import React, { useState, createContext, useContext } from 'react';
import { Images } from "../assets/images";

const FishContext = createContext();

export const initialFishes = [
  { name: "trout", url: Images.trout },
  { name: "salmon", url: Images.salmon },
  { name: "tuna", url: Images.tuna },
  { name: "shark", url: Images.shark },
];

export const FishProvider = ({ children }) => {

  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [currentItem, setCurrentItem] = useState(0);
    
  const fishState = {
    correctCount,
    incorrectCount,
    currentItem,
  };

  const fishSetters = {
    setCorrectCount,
    setIncorrectCount,
    setCurrentItem,
  };

  return (
    <FishContext.Provider value={{ fishState, fishSetters }}>
        {children}
    </FishContext.Provider>
  );
};

export const useFishContext = () => useContext(FishContext);
