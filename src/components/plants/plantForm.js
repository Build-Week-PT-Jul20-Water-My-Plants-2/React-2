import React, {useContext, useEffect} from "react";
import {call_post, PLANTS} from "../../api/apiHelpers";
import PlantContext from "../../contexts/plantsContext";
import EditingContext from "../../contexts/editingContext";
import {usePlantForm} from "../../hooks/usePlantForm";

import "./sass/plantForm.scss"

function PlantForm(props) {
    const [plant, handleChanges] = usePlantForm(props.plant);

    const {editing, setEditing} = useContext(EditingContext);
    const {userInfo} = useContext(PlantContext);

    function handleSubmit(event) {
        event.preventDefault();

        let newPlant = {
            nickname: plant.nickname,
            species: plant.species,
            h2oFrequency: plant.h2oFrequency,
            user_id: userInfo.id,
        };

        call_post(PLANTS, newPlant)
            .then((response) => {
                console.log(response);
                if (editing) {setEditing(false)}
                props.history.push('/');
            })
            .catch((error) => {
                console.log(error);
            });
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
                <button type="submit">{editing ? "Save" : "Add"}</button>
            </form>
        </div>
    );
}

export default PlantForm;
