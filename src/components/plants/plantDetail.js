import React from "react";
import {call_delete, PLANTS} from "../../api/apiHelpers";

const PlantDetail = (props) => {
    function handleClick(event) {
        event.preventDefault();

        console.log(props.history);

        call_delete(`${PLANTS}${props.plant.id}`)
            .then((response) => {
                props.history.push('/');
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return(
        <div>
            <img src='' alt={ props.plant.nickname }/>
            <div>
                <h2>{ props.plant.species }</h2>
                <h3>Common Name: { props.plant.nickname }</h3>
                <p>Watering Frequency: { props.plant.h2oFrequency }</p>
            </div>

            <div onClick={handleClick}>Delete Plant</div>
        </div>
    );
}

export default PlantDetail;
