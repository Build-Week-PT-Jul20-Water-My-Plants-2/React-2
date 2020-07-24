import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from "./components/core/navigation";
import PrivateRoute from "./components/routes/privateRoute";
import MarketingPage from "./components/marketing/marketingPage";

import PlantContext from "./contexts/plantsContext";
import PlantList from "./components/plants/plantList";
import {call_get, PLANTS} from "./api/apiHelpers";


function App() {
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        let token = localStorage.getItem('token') ? localStorage.getItem('token') : false;

        let data = window.atob(token.slice(token.indexOf(".") + 1, token.lastIndexOf(".")));
        let id = data.slice(data.indexOf('Id":') + 4, data.indexOf(',"user'));

        call_get(`${PLANTS}${id}`)
            .then((response) => {
                console.log(response);
                setUserInfo({...userInfo, plants: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

  return (
      <Router>
          <PlantContext.Provider value={{userInfo, setUserInfo}}>
          <div>
              <Navigation/>

              {localStorage.getItem('token') ? <PrivateRoute component={PlantList}/> : <Route exact path="/" component={MarketingPage}/>}
          </div>
          </PlantContext.Provider>
      </Router>
  );
}

export default App;
