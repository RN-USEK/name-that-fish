import React, { useState, useContext, useEffect } from 'react';
import { Images } from "../assets/images";
const FishContext = React.createContext();

export const FishProvider = ({ children }) => {
    const initialState = {
    initialFishes: [
        { name: "trout", url: Images.trout },
        { name: "salmon", url: Images.salmon },
        { name: "tuna", url: Images.tuna },
        { name: "shark", url: Images.shark },
        ],
    currentItem: 0,
    correctCount: 0,
    incorrectCount: 0,
    currentItem:0,
    isGameOver:false,
    };

    const [fish, setFish] = useState(initialState);

    const incrementProperty = (property, amount) => {
        setFish((prevState) => {
            const updatedFishState = {
                ...prevState,
                [property]: prevState[property] + amount,
            };
            if (updatedFishState.currentItem === updatedFishState.initialFishes.length) {
                updatedFishState.isGameOver = true;
            }
            return updatedFishState;
        });
    };
    
    const fishActions = {
    incrementProperty,
    };

    return (
    <FishContext.Provider value={{ fishState: fish, fishActions }}>
        {children}
    </FishContext.Provider>
    );
};

export const useFishContext = () => useContext(FishContext);
