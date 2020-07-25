import React, {useContext} from "react";
import EditingContext from "../../contexts/editingContext";
import PlantForm from "./plantForm";

function PlantEdit(props) {
    const {editing, setEditing} = useContext(EditingContext);

    return (
        <PlantForm plant={props.plant} editing={editing} setEditing={setEditing}/>
    );
}

export default PlantEdit;
