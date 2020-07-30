import React, {useContext, useEffect, useState} from "react";
import PlantList from "./plantList";
import PlantForm from "./plantForm";

import {call_delete, call_get, PLANTS} from "../../api/apiHelpers";

import PlantContext from "../../contexts/plantsContext";
import AuthContext from "../../contexts/authContext";


function PlantApp() {
    const {auth} = useContext(AuthContext);

    const [plants, setPlants] = useState([]);

    useEffect(() => {
        call_get(`${PLANTS}${auth.id}`)
            .then((response) => {
                setPlants(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);

    const updatePlants = () => {
        call_get(`${PLANTS}${auth.id}`)
            .then((response) => {
                setPlants(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const deletePlant = (plant) => {
        call_delete(`${PLANTS}${plant.id}`)
            .then((response) => {
                console.log(response);
                updatePlants();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <PlantContext.Provider value={{plants, updatePlants, deletePlant}}>
                <PlantForm />
                <PlantList />
            </PlantContext.Provider>
        </div>
    );
}

export default PlantApp;
