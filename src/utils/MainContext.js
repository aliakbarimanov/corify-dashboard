// import useState, createContext, useEffect
import { useState, createContext, useEffect } from "react";

// import axios
import axios from "axios";

// import useNavigate
import { useNavigate } from "react-router-dom";

export const Context = createContext();

export const MainContext = ({ children }) => {

    const navigate = useNavigate();

    const [userIn, setUserIn] = useState(false);
    const [user, setUser] = useState({});

    useEffect(() => {
        checkLogin();
    }, [userIn]);


    const logOut = () => {
        localStorage.removeItem("token");
        setUserIn(false);
    }

    const checkLogin = async () => {
        const token = JSON.parse(localStorage.getItem("token"));
        const body = { token, };

        if (token !== null) {

            await axios.post(process.env.REACT_APP_CHECK_LOGIN, body)
                .then(res => {
                    setUserIn(true);
                    setUser(res.data);
                    navigate("/");
                })
                .catch(err => {
                    console.log(err)
                    setUserIn(false);
                })
        }
    }

    const globalStates = { userIn, setUserIn, user, setUser, checkLogin, logOut };

    return <Context.Provider value={globalStates}>{children}</Context.Provider>
}