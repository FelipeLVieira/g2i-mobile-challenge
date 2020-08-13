import React, { createContext, useState } from 'react';

const PlayerContext = createContext();

export const PlayerProvider = ({children}) => {

    const [name, setName] = useState("No Name");
    const [correct, setCorrect] = useState(0);
    const [wrong, setWrong] = useState(0);
    
    return(
        <PlayerContext.Provider value={{ name, setName, correct, setCorrect, wrong, setWrong }}>
            {children}
        </PlayerContext.Provider>
    );
};

export default PlayerContext;