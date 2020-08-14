import React, { createContext, useState } from 'react';

const PlayerContext = createContext();

export const PlayerProvider = ({children}) => {

    const [name, setName] = useState("No Name");
    const [correct, setCorrect] = useState(0);
    const [wrong, setWrong] = useState(0);

    const clearContext = () => {
        setName("No Name");
        setCorrect(0);
        setWrong(0);
    }
    
    return(
        <PlayerContext.Provider value={{ name, setName, correct, setCorrect, wrong, setWrong, clearContext }}>
            {children}
        </PlayerContext.Provider>
    );
};

export default PlayerContext;