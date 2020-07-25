import React, {useState} from "react";
import {call_delete, PLANTS} from "../../api/apiHelpers";
import PlantInfo from "./plantInfo";
import PlantForm from "./plantForm";
import EditingContext from "../../contexts/editingContext";

const PlantDetail = (props) => {
    const [editing, setEditing] = useState(false);

    function handleDelete(event) {
        event.preventDefault();

        call_delete(`${PLANTS}${props.plant.id}`)
            .then((response) => {
                props.history.push('/');
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function handleEdit(event) {
        event.preventDefault();

        console.log(event);
        setEditing(true);
    }

    return(
        <EditingContext.Provider value={{editing, setEditing}}>
            <div>
                {editing ? <PlantForm plant={props.plant}/> : <PlantInfo plant={props.plant}/>}
                {!editing ? <button type="button" onClick={handleEdit}>Edit Plant</button> : ''}
                <button type="button" onClick={handleDelete}>Delete Plant</button>
            </div>
        </EditingContext.Provider>
    );
}

export default PlantDetail;
