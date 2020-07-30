import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import PrivateRoute from "./components/routes/privateRoute";
import PublicRoute from "./components/routes/publicRoute";

import PlantApp from "./components/plants/plantApp";
import UserApp from "./components/user/userApp";
import Login from "./components/core/login";
import Register from "./components/core/register";

import AuthContext from "./contexts/authContext";

import {getToken, getUserIdFromToken, isAuthenticated} from "./utilites/services";



function App() {
    const [auth, setAuth] = useState({authenticated: false, id: ''});

    //not working
    useEffect(() => {
        if(isAuthenticated()) {
            let id = getUserIdFromToken(getToken());
            setAuth({authenticated: true, id: id});
        }
    }, []);

    return (
        <Router>
            <AuthContext.Provider value={{auth, setAuth}}>
                <Link to="/">Home</Link>
                <Link to="/plants">Plants</Link>
                <Link to="/profile">Profile</Link>
                {!isAuthenticated() ? <Link to="/login">Login</Link> : ''}
                {!isAuthenticated() ? <Link to="/Register">Register</Link> : ''}

                <Switch>
                    <PublicRoute restricted={true} path="/login" component={Login} />
                    <PublicRoute restricted={true} path="/register" component={Register} />

                    <PrivateRoute path="/plants" component={PlantApp}/>
                    <PrivateRoute path="/profile" component={UserApp} />
                </Switch>
            </AuthContext.Provider>
        </Router>
    );
}

export default App;
