import React, {useContext} from "react";
import UserContext from "../../contexts/userContext";
import EditingContext from "../../contexts/editingContext";

function UserDetail() {
    const {user} = useContext(UserContext);
    const {toggleEditing} = useContext(EditingContext);

    function handleClick(event) {
        event.preventDefault();

        toggleEditing();
    }

    return(
        <div>
            <h3>Username: {user.username}</h3>
            <p>Phone Number: {user.phoneNumber}</p>
            <button type="button" onClick={handleClick} >Edit</button>
        </div>
    );
}

export default UserDetail;
