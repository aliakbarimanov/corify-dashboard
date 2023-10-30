// import useState, createContext
import { useState, createContext } from "react";

// import axios
import axios from "axios";

export const Context = createContext();

export const MainContext = ({ children }) => {

    const [userIn, setUserIn] = useState(false);
    const [user, setUser] = useState({});

    const checkLogin = async () => {
        const token = JSON.parse(localStorage.getItem("token"));
        const body = { token, };

        await axios.post(process.env.REACT_APP_CHECK_LOGIN, body)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    const globalStates = { userIn, setUserIn, user, setUser };

    return <Context.Provider value={globalStates}>{children}</Context.Provider>
}