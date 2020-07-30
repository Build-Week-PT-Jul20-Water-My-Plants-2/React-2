import React, {useContext} from "react";
import {call_post, call_put, PLANTS} from "../../api/apiHelpers";
import PlantContext from "../../contexts/plantsContext";
import AuthContext from "../../contexts/authContext";

import {useForm} from "../../hooks/useForm";
import {initialPlant} from "../../utilites/services";

import "./sass/plantForm.scss"


function PlantForm(props) {
    const [plant, handleChanges, clearForm] = useForm(initialPlant, props.plant);
    const {auth} = useContext(AuthContext);
    const {updatePlants} = useContext(PlantContext);

    function handleSubmit(event) {
        event.preventDefault();

        let plantPayload = {
            nickname: plant.nickname,
            species: plant.species,
            h2oFrequency: plant.h2oFrequency,
            user_id: auth.id,
        };

        if(props.editing) {
            call_put(`${PLANTS}${props.plant.id}`, plantPayload)
                .then((response) => {
                    console.log(response);
                    updatePlants();
                    clearForm();
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    props.setEditing(false);
                });
        } else {

            call_post(PLANTS, plantPayload)
                .then((response) => {
                    console.log(response);
                    updatePlants();
                    clearForm();
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    return (
        <div>
            <form className="plant-form" onSubmit={handleSubmit}>
                <label>Common Name:
                    <input name="nickname" placeholder="Common Name" value={plant.nickname} type="text" onChange={handleChanges}/>
                </label>
                <label>Species:
                    <input name="species" placeholder="Species" value={plant.species} type="text" onChange={handleChanges}/>
                </label>
                <label>Watering Frequency:
                    <input name="h2oFrequency" placeholder="Watering Frequency" value={plant.h2oFrequency} type="text" onChange={handleChanges}/>
                </label>
                <button type="submit">Save Plant</button><button type="button" onClick={clearForm}>Cancel</button>
            </form>
        </div>
    );
}

export default PlantForm;
