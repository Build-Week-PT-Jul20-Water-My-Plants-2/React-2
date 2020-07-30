import React from "react";

function PlantInfo(props) {

    return (
        <div>
            {/*<img src='' alt={ props.plant.nickname }/>*/}
            <div>
                <h2>{ props.plant.species }</h2>
                <h3>Common Name: { props.plant.nickname }</h3>
                <p>Watering Frequency: { props.plant.h2oFrequency }</p>
            </div>
        </div>
    );
}

export default PlantInfo;
