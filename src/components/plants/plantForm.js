import React, {useContext} from "react";
import {call_post, PLANTS} from "../../api/apiHelpers";
import PlantContext from "../../contexts/plantsContext";

function PlantForm(props) {
    const {userInfo} = useContext(PlantContext)

    function handleSubmit(event) {
        event.preventDefault();

        let newPlant = {
            nickname: event.target.nickname.value,
            species: event.target.species.value,
            h2oFrequency: event.target.h2oFrequency.value,
            user_id: userInfo.id,
        };

        console.log(newPlant);

        call_post(PLANTS, newPlant)
            .then((response) => {
                console.log(response);
                props.history.push('/');
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label><input name="nickname" placeholder="Common Name" type="text"/></label>
                <label><input name="species" placeholder="Species" type="text"/></label>
                <label><input name="h2oFrequency" placeholder="Watering Frequency" type="text"/></label>
                <button type="submit">Add Plant</button>
            </form>
        </div>
    );
}

export default PlantForm;
