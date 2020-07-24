import React, {useContext, useEffect} from "react";
import PlantDetail from "./plantDetail";
import PlantContext from "../../contexts/plantsContext";
import {call_get, PLANTS} from "../../api/apiHelpers";
import PlantForm from "./plantForm";

const PlantList = () => {
    const {userInfo, setUserInfo} = useContext(PlantContext);

    useEffect(() => {
        call_get(PLANTS)
            .then((response) => {
                setUserInfo(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    if(userInfo.plants) {
        return(
            <div>
                <PlantForm />
                {userInfo.plants.map((plant) => {
                    return (
                        <PlantDetail plant={plant} key={plant.id}/>
                    );
                })}
            </div>
        );
    } else {
        return (
            <div>
                Loading ...
            </div>
        );
    }
}

export default PlantList;
