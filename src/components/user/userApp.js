import React, {useContext, useEffect, useState} from "react";
import {Switch, Route, Link} from 'react-router-dom';

import Profile from "./profile";
import Register from "../core/register";

import PrivateRoute from "../routes/privateRoute";

import UserContext from "../../contexts/userContext";
import AuthContext from "../../contexts/authContext";

import {call_get, call_put, call_register, USERS} from "../../api/apiHelpers";
import Login from "../core/login";


function UserApp() {
    const {auth} = useContext(AuthContext);
    const [user, setUser] = useState({});

    useEffect(() => {
        console.log(auth);

        call_get(`${USERS}`)
            .then((response) => {
                response.data.map((user) => {
                    if(auth.id === user.id) {
                        setUser(user);
                    }
                });
            })
            .catch((error) => {
                console.log(error);
            });

    },[])

    const updateUser = (info) => {
        call_put(`${USERS}${info.id}`, info)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const addUser = (info) => {
        call_register(info)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return(
        <div>
            <UserContext.Provider value={{user, updateUser, addUser}}>
                <Profile />
            </UserContext.Provider>
        </div>
    );
}

export default UserApp;
