import React, {useContext, useState} from "react";
import {call_delete, PLANTS} from "../../api/apiHelpers";
import PlantInfo from "./plantInfo";
import EditingContext from "../../contexts/editingContext";
import PlantContext from "../../contexts/plantsContext";
import PlantEdit from "./plantEdit";

const PlantDetail = (props) => {
    const {deletePlant} = useContext(PlantContext);
    const [editing, setEditing] = useState(false);

    function handleDelete(event) {
        event.preventDefault();

        deletePlant(props.plant);
    }

    function handleEdit(event) {
        event.preventDefault();

        setEditing(true);
    }

    return(
        <EditingContext.Provider value={{editing, setEditing}}>
            <div>
                {editing ? <PlantEdit plant={props.plant}/> : <PlantInfo plant={props.plant}/>}
                {!editing ? <button type="button" onClick={handleEdit}>Edit Plant</button> : ''}
                <button type="button" onClick={handleDelete}>Delete Plant</button>
            </div>
        </EditingContext.Provider>
    );
}

export default PlantDetail;
