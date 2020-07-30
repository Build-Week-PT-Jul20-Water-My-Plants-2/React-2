import React, {useContext} from "react";
import UserContext from "../../contexts/userContext";

function Register() {
    const {addUser} = useContext(UserContext);

    function handleSubmit(event) {
        event.preventDefault();
        let newUser = {
            username: event.target.username.value,
            phoneNumber: event.target.phoneNumber.value,
            password: event.target.password.value,
        };

        addUser(newUser);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" name="username" placeholder="Username"/>
                </label>
                <label>
                    <input type="text" name="phoneNumber" placeholder="Phone Number"/>
                </label>
                <label>
                    <input type="text" name="password" placeholder="Password"/>
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
