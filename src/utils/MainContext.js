// import useState, createContext, useEffect
import { useState, createContext, useEffect } from "react";

// import axios
import axios from "axios";

export const Context = createContext();

export const MainContext = ({ children }) => {

    useEffect(()=>{
        checkLogin();
    }, []);

    const [userIn, setUserIn] = useState(false);
    const [user, setUser] = useState({});

    const checkLogin = async () => {
        const token = JSON.parse(localStorage.getItem("token"));
        const body = { token, };

        await axios.post(process.env.REACT_APP_CHECK_LOGIN, body)
            .then(res => {
                console.log(res);
                setUserIn(true);
                Navigate()
            })
            .catch(err => console.log(err))
    }

    const globalStates = { userIn, setUserIn, user, setUser, checkLogin };

    return <Context.Provider value={globalStates}>{children}</Context.Provider>
}