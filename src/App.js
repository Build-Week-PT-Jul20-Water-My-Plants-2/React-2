import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from "./components/core/navigation";
import PrivateRoute from "./components/routes/privateRoute";
import MarketingPage from "./components/marketing/marketingPage";

import PlantContext from "./contexts/plantsContext";
import PlantApp from "./components/plants/plantApp";

import {call_get, PLANTS} from "./api/apiHelpers";


function App() {
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        let token = localStorage.getItem('token') ? localStorage.getItem('token') : false;

        if(token) {
            let data = window.atob(token.slice(token.indexOf(".") + 1, token.lastIndexOf(".")));
            let id = data.slice(data.indexOf('Id":') + 4, data.indexOf(',"user'));

            console.log(id);
            console.log(`${PLANTS}${id}`);

            call_get(`${PLANTS}${id}`)
                .then((response) => {
                    console.log(response);
                    setUserInfo({...userInfo, id: parseInt(id), plants: response.data});
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, []);

    function updatePlants() {
        call_get(`${PLANTS}${userInfo.id}`)
            .then((response) => {
                console.log("update plants", response);
                setUserInfo({...userInfo, plants: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    }

  return (
      <Router>
          <PlantContext.Provider value={{userInfo, setUserInfo, updatePlants}}>
              <div>
                  <Navigation/>

                  {localStorage.getItem('token') ? <PrivateRoute component={PlantApp}/> : <Route exact path="/" component={MarketingPage}/>}
              </div>
          </PlantContext.Provider>
      </Router>
  );
}

export default App;
