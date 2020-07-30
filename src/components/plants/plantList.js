import React, {useContext} from "react";
import PlantDetail from "./plantDetail";
import PlantContext from "../../contexts/plantsContext";

const PlantList = () => {
    const {plants} = useContext(PlantContext);

    if(plants) {
        return(
            <div>
                {plants.map((plant) => {
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
