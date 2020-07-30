import React, {useState} from "react";
import UserDetail from "./userDetail";
import UserEdit from "./userEdit";
import EditingContext from "../../contexts/editingContext";

function Profile() {
    const [editing, setEditing] = useState(false);

    function toggleEditing() {
        setEditing(!editing);
    }

    return(
        <EditingContext.Provider value={{toggleEditing}}>
            { !editing ? <UserDetail /> : <UserEdit /> }
        </EditingContext.Provider>
    );
}

export default Profile;
