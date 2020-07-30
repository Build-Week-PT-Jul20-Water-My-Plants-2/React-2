import React, {useContext, useEffect, useState} from "react";

import Profile from "./profile";

import UserContext from "../../contexts/userContext";
import AuthContext from "../../contexts/authContext";

import {call_get, call_put, call_register, USERS} from "../../api/apiHelpers";

import {getToken, getUserIdFromToken} from "../../utilites/services";


function UserApp() {
    const {auth} = useContext(AuthContext);
    const [user, setUser] = useState({});

    useEffect(() => {
        let id = getUserIdFromToken(getToken());

        call_get(`${USERS}`)
            .then((response) => {
                response.data.map((userFromDB) => {
                    if(parseInt(id) === userFromDB.id) {
                        setUser(userFromDB);
                    }
                });
            })
            .catch((error) => {
                console.log(error);
            });

    },[])

    const updateUser = (payload, userID) => {
        call_put(`${USERS}${userID}`, payload)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const addUser = (payload) => {
        call_register(payload)
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
