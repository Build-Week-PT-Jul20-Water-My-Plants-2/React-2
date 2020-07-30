import React, {useContext} from "react";
import UserContext from "../../contexts/userContext";
import EditingContext from "../../contexts/editingContext";
import {useForm} from "../../hooks/useForm";

function UserEdit() {
    const {user, updateUser} = useContext(UserContext);
    const {toggleEditing} = useContext(EditingContext);

    const [userForm, handleChanges, clearForm] = useForm(user)

    function handleSubmit(event) {
        event.preventDefault();

        let updateUserPayload = {
            username: userForm.username,
            password: userForm.password,
            phoneNumber: userForm.phoneNumber,
        };

        updateUser(updateUserPayload, user.id);
        toggleEditing();
    }

    function handleCancel(event) {
        event.preventDefault()

        clearForm();
        toggleEditing();
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" name="username" placeholder="Username" value={userForm.username} onChange={handleChanges}/>
                </label>
                <label>
                    Phone Number:
                    <input type="text" name="phoneNumber" placeholder="Phone Number" value={userForm.phoneNumber} onChange={handleChanges}/>
                </label>
                <label>
                    Password:
                    <input type="text" name="password" placeholder="Password" value={userForm.password} onChange={handleChanges}/>
                </label>
                <button type="submit">Save</button><button type="button" onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    );
}

export default UserEdit;
