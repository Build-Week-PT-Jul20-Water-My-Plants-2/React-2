import React, {useEffect, useState} from "react";

import Profile from "./profile";

import UserContext from "../../contexts/userContext";

import {call_get, call_put, call_register, USERS} from "../../api/apiHelpers";

import {getToken, getUserIdFromToken} from "../../utilites/services";


function UserApp() {
    const [user, setUser] = useState({});

    useEffect(() => {
        if(!user.id) {
            let id = getUserIdFromToken(getToken());

            call_get(`${USERS}`)
                .then((response) => {
                    console.log(response);
                    response.data.map((userFromDB) => {
                        console.log(userFromDB.id, id, parseInt(id) === userFromDB.id)
                        if(parseInt(id) === userFromDB.id) {
                            console.log("Setting user state", userFromDB)
                            setUser(userFromDB);
                        }
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },[])

    const updateUser = (payload, userID) => {
        call_put(`${USERS}${userID}`, payload)
            .then((response) => {
                console.log(response);
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return(
        <div>
            <UserContext.Provider value={{user, updateUser}}>
                {user.id ? <Profile /> : <p>Loading . . .</p>}
            </UserContext.Provider>
        </div>
    );
}

export default UserApp;
