// import useState, createContext
import { useState, createContext } from "react";

export const Context = createContext();

export const MainContext = ({ children }) => {

    const [userIn, setUserIn] = useState(false);

    const globalStates = { userIn, setUserIn };

    return <Context.Provider value={globalStates}>{children}</Context.Provider>
}